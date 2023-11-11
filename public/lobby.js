function startGame(op) {
  const opp = op.classList[0];

    localStorage.setItem("opponent", opp);
    window.location.href = "game.html";
  }



  // Function to update the table with new data from database
function updateTable(data) {
  const tableBody = document.querySelector('table tbody');
  tableBody.innerHTML = ''; // Clear the table body

  data.forEach((entry) => {
    const row = document.createElement('tr');

    const playerNameCell = document.createElement('td');
    playerNameCell.textContent = entry.playerName; // Player Name

    const winningPercentageCell = document.createElement('td');
    winningPercentageCell.textContent = entry.winningPercentage; // Winning Percentage

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

