function startGame(op) {
  const opp = op.classList[0]

    localStorage.setItem("opponent", opp);

    username = localStorage.getItem("userName").valueOf

    if(username){
      window.location.href = "game.html";
    }
    else{
      window.location.href = "index.html";
    }
    
  }



  // Function to update the table with new data from database
function updateTable(data) {
  const tableBody = document.querySelector('table tbody');
  tableBody.innerHTML = ''; // Clear the table body
  console.log(data)
  data.forEach((entry) => {
    const row = document.createElement('tr');

    const playerNameCell = document.createElement('td');
    playerNameCell.textContent = entry.name; // Player Name

    const winningPercentageCell = document.createElement('td');
    winningPercentageCell.textContent = entry.perc; // Winning Percentage

    const actionCell = document.createElement('td');
    const playButton = document.createElement('button');
    playButton.textContent = 'Play';
    playButton.addEventListener('click', () => startGame(entry.playerName)); // Call the startGame function with the player's name
    actionCell.appendChild(playButton);

    // Append cells to the row
    row.appendChild(playerNameCell);
    row.appendChild(winningPercentageCell);
    row.appendChild(actionCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

function onStartup(){
  getPlayers();
  playerList = JSON.parse(localStorage.getItem("players"))

  console.log("playerlist: ", playerList);

  const matchedPlayers = playerList.filter(player =>
    activePlayers.some(activePlayer => activePlayer.username === player.name)
  ).map(player => player.name);
  

  

  updateTable(matchedPlayers);


  return true;
}

async function getPlayers() {

  try {
    const response = await fetch('/api/players', {
      method: 'GET',
      headers: {'content-type': 'application/json'},
    });

    // Store what the service gave us as the high scores
    const scores = await response.json();
    localStorage.setItem('players', JSON.stringify(scores));
  } catch {
    // If there was an error then just track scores locally
    console.log("failed to get players")
  }
}

const ws = new WebSocket('ws://localhost:8080');
var activePlayers = [];

ws.addEventListener('open', function (event) {
  // Handle connection open
  username = localStorage.getItem("userName")
  ws.send(JSON.stringify({ type: 'username', username1: username }));
});

ws.addEventListener('message', function (event) {
  // Handle incoming messages
  const data = JSON.parse(event.data);

  // If the server is sending ping messages
  if (data.type === 'ping') {
    // Respond with a pong message to indicate the client is active
    ws.send(JSON.stringify({ type: 'pong' }));
  }

  // You can handle other types of messages here if needed
  if (data.type === 'activePlayersUpdate') {
    activePlayers = data.players;

    playerList = JSON.parse(localStorage.getItem("players"))

    const matchedPlayers = playerList.filter(player =>
      activePlayers.some(activePlayer => activePlayer.username === player.name)
    ).map(player => player);
    
    console.log("active players", matchedPlayers)

    

    updateTable(matchedPlayers);
  }
    
});

function sendPlayerAction(action) {
  // Send player actions to the server if needed
  ws.send(JSON.stringify({ type: 'playerAction', action }));
}

ws.addEventListener('close', function () {
  // Handle connection closure
  // You may want to implement reconnection logic here if needed
});

onStartup();
