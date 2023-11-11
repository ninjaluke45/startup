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

  let found = false;
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
      break;
    }
  }

  if (!found) {
    players.push(player);
  }


  return players;
}

