const express = require('express');
const app = express();

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
const config = require('./.gitignore/dbConfig.json');

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});

// GetPlayers
apiRouter.get('/players', (_req, res) => {
  //for debug, remove when live
  addPlayer("Player 4 (from server)", 75);
  addPlayer("Player 5 (from server)", 66);
  addPlayer("Player 6 (from server)", 25);
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

async function insertMondo(table, item){
  collection = getMondo(table);
  await collection.insertOne(item);
}

async function getMondoPlayers(){
  collection = getMondo("players");

  // Query the documents
  const cursor = collection.find();
  const allDocuments = await cursor.toArray();

  return allDocuments;
}

async function getMondoScores(){
  collection = getMondo("scores");

  // Query the documents
  const cursor = collection.find();
  const allDocuments = await cursor.toArray();

  return allDocuments;
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
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  return collection;
  
}

