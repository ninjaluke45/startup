function updateTable(data) {
    // this function will be used to insert data from the database
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = ''; // Clear the table body
  
    data.forEach((entry, index) => {
      const row = document.createElement('tr');
  
      const rankCell = document.createElement('td');
      rankCell.textContent = index + 1; // Rank
  
      const playerNameCell = document.createElement('td');
      playerNameCell.textContent = entry.playerName; // Player Name
  
      const winningPercentageCell = document.createElement('td');
      winningPercentageCell.textContent = entry.winningPercentage; // Winning Percentage
  
      // Append cells to the row
      row.appendChild(rankCell);
      row.appendChild(playerNameCell);
      row.appendChild(winningPercentageCell);
  
      // Append the row to the table body
      tableBody.appendChild(row);
    });
  }
  