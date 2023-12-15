const express = require('express');
const app = express();

const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());

var mondo_connection = false;

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


// set up mondo database connection
const { MongoClient } = require('mongodb');
const config = require('../dbConfig.json');

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// GetScores
apiRouter.get('/scores', async (_req, res) => {
  scores = await getMondoScores();
  res.send(scores);
});

apiRouter.get('/connection', (_req, res) => {
  res.send(mondo_connection);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});

// GetPlayers
apiRouter.get('/players', async (_req, res) => {
  players = await getMondoPlayers();
  res.send(players);
});

// SubmitPlayers
apiRouter.post('/player', (req, res) => {
  players = updatePlayers(req.body, scores);
  res.send(players);
});

let scores = [];

function compScore(score){
  tot = score.total;
  wins = score.win;

  perc = (wins/tot) * 100;
  return Math.round(perc);

}

function updateScores(newScore, scores) {
  // this is where a third party service call could be made
  // third party service would take priorty but if failed would use below code
  collection = getMondoScores()
  if(mondo_connection){
    var exists = false;
    var doc = null;
    exists, doc = mondoExists("scores", newScore.name);
    if(exists){
      const tot = doc.total + 1;
      if(newScore.win){
        const win = doc.win + 1;

      }
      else{
        const win = doc.win;
      }

    }
    else{
      if(newScore.win){
        var score = {name: newScore.name, win: 1, total: 1}

      }
      else{
        var score = {name: newScore.name, win: 0, total: 1}
      }
      
      insertMondo("scores", score)

    }

    return getMondoScores();
  }
  
  found = false;
  
  for (const [i, prevScore] of scores.entries()) {
    if(newScore.name === prevScore.name){
      prevScore.total = prevScore.total + 1;
      found = true;

      newScore = prevScore;
      if(win){
        prevScore.win = prevScore.win + 1;
      }
      break;
    }
  }  

  if(!found){
    newScore.total = 1;
    if(win){
      newScore.win = 1;
    }
    else{
      newScore.win = 0;
    }
  }

  

  found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (compScore(newScore) > compScore(prevScore)) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    
    scores.push(newScore);
  }

 

  return scores;
}

let players = [];
function updatePlayers(player) {
// a third party service call could be made here
collection = getMondoScores()
if(mondo_connection){
  var exists = false;
  var doc = null;
  exists, doc = mondoExists("players", player.name);
  if(exists){
    return getMondoPlayers();
  }
  else{
    
    
    insertMondo("players", player)

  }

  return getMondoPlayers();
}
  

  let found = false;
  for (const [i, oldPlayer] of players.entries()) {
    if (player.name === oldPlayer.name) {
      found = true;

      for (const [i, prevScore] of scores.entries()) {
        if(player.name === prevScore.name){
          player.perc = compScore(prevScore)
          break;
        }
      }  

      break;
    }
  }

  if (!found) {
    player.perc = 0;
    players.push(player);
  }


  return players;
}

function addPlayer(name, perc) {
  collection = getMondo();

  if(mondo_connection){

    var player = {
      name: name,
      perc: perc
    };


    if(!mondoExists("players", name)[0]){
      insertMondo("players", player);
    }

    
    

  }
  else{


    // Check if a player with the same name already exists
    var existingPlayer = players.find(player => player.name === name);

    if (!existingPlayer) {
        // If not, add the new player to the array
        var player = {
            name: name,
            perc: perc
        };
        players.push(player);
    }
  }
}

async function insertMondo(table, item){
  collection = getMondo(table);
  await collection.insertOne(item);
}

async function getMondoPlayers(){
  collection = getMondo("players");

  // Query the documents
  const cursor = collection.find();
  const allDocuments = await cursor.toArray();


  return await allDocuments;
}

async function mondoExists(table, name){
  collection = getMondo(table);
  
  const query = { name: name };
  const document = await collection.findOne(query);

  if (document) {
    return true, document;
  } else {
    return false, document;
  }
}

async function getMondoScores(){
  collection = getMondo("scores");

  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  // Query the documents
  const cursor = collection.find();
  const allDocuments = await cursor.toArray();


  allDocuments.forEach((doc) => {
    doc.compScore = compScore(doc); // Assuming this function calculates the score
  });
  
  // Sort the array based on the compScores
  allDocuments.sort((a, b) => b.compScore - a.compScore);

  return await allDocuments;
}

function getMondo(collect){
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('StartUp');
  const collection = db.collection(collect);

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
    mondo_connection = true;
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    mondo_connection = False;
    process.exit(1);
  });

  return collection;
  
}

apiRouter.post('/auth/login', async (req, res) => {

  let user = await getUser(req.body.email);
  console.log("user:", user) 
  if (!user) {
    console.log("got in login")
    // Username does not exist, create a new user
    user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.status(201).send({ id: user._id, msg: 'User created' , ok: true});
    console.log("user created")
    return;
  }

  const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
  if (isPasswordValid) {
    // Password matches
    console.log("success")
    setAuthCookie(res, user.token);
    res.send({ id: user._id , ok: true});
  } else {
    // Username exists but the password is incorrect
    console.log("failure")
    res.status(401).send({ msg: 'Unauthorized' , ok: false});
    
  }
});


// getMe for the currently authenticated user
apiRouter.get('/user/me', async (req, res) => {
  connection = getMondo("login");
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  collection = getMondo("login");
  return collection.findOne({ email: email });
}


async function createUser(email, password) {
  collection = getMondo("login");

  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };

  insertMondo("login", user)

  const score = {
    name: email,
    win: 0,
    total: 0 
  }

  insertMondo("scores", score)

  const player = {
    name: email,
    perc: 0
  }

  insertMondo("players", player)
  

  return user;
}


function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const WebSocket = require('ws');
const wss = new WebSocket.Server({ noServer: true });
httpService.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});

let activePlayers = [];

function broadcastActivePlayersUpdate() {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'activePlayersUpdate', players: activePlayers }));
      console.log("sent websocket users", activePlayers)
    }
  });
}

wss.on('connection', function connection(ws) {
  let playerId = generateUniqueId(); // You'd implement your own unique ID generation logic

  let playerUsername = null;

  ws.on('message', function incoming(message) {
    // Handle incoming messages if needed
    const data = JSON.parse(message);

    if (data.type === 'username') {
      const username = data.username1;
      // Do something with the received username (e.g., store it with the player information)
      playerUsername = username;

      activePlayers.push({
        id: playerId,
        username: playerUsername
      });5

      // Broadcast the updated list of active players to all connected clients
      broadcastActivePlayersUpdate();
      
    }
  });

  
  

  // Ping the client periodically to check if it's still connected
  const pingInterval = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.ping();
      
    } else {
      clearInterval(pingInterval);
    }
  }, 5000); // Adjust the interval as needed

  let pongReceived = true;

  ws.on('pong', () => {
    // The client responded to the ping, so it's still connected
    pongReceived = true;
  });

  

  ws.on('close', function close() {
    // Handle player disconnect
    activePlayers = activePlayers.filter(player => player.id !== playerId);

    // Broadcast the updated list of active players to all connected clients
    broadcastActivePlayersUpdate();

    clearInterval(pingInterval);
  });

  // Check for pong response after each ping interval
  const checkPongResponse = setInterval(() => {
    if (!pongReceived) {
      // If no pong response received, assume the player is disconnected
      clearInterval(pingInterval);
      clearInterval(checkPongResponse);
      ws.terminate(); // Close the WebSocket connection
    } else {
      pongReceived = false; // Reset flag for the next interval
    }
  }, 6000);
});


function generateUniqueId() {
  const timestamp = Date.now().toString(36); // Convert current time to base36 string
  const randomString = Math.random().toString(36).substring(2, 8); // Generate random string and take a substring

  return timestamp + randomString;
}



