const express = require('express');
const app = express();

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
const config = require('./dbConfig.json');

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// GetScores
apiRouter.get('/scores', async (_req, res) => {
  scores = await getMondoScores();
  console.log("index scores", scores)
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
  console.log("2:", players)
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

  console.log("1:", allDocuments)

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



