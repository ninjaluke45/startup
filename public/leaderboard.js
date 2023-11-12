function updateTable(data) {
    // this function will be used to insert data from the database
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = ''; // Clear the table body
  
    data.forEach((entry, index) => {
      const row = document.createElement('tr');
  
      const rankCell = document.createElement('td');
      rankCell.textContent = index + 1; // Rank
  
      const playerNameCell = document.createElement('td');
      playerNameCell.textContent = entry.name; // Player Name
  
      const winningPercentageCell = document.createElement('td');
      winningPercentageCell.textContent = entry.perc; // Winning Percentage
  
      // Append cells to the row
      row.appendChild(rankCell);
      row.appendChild(playerNameCell);
      row.appendChild(winningPercentageCell);
  
      // Append the row to the table body
      tableBody.appendChild(row);
    });
  }


  function onStartup(){
    getPlayers();
    playerList = JSON.parse(localStorage.getItem("players"))
  
    console.log("playerlist: ", playerList);
  
    updateTable(playerList);
  
  
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
  
  onStartup();
  