import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export function Lobby() {
    const navigate = useNavigate();
  const [players, setPlayers] = useState([]);

  const startGame = (opponent) => {
    localStorage.setItem("opponent", opponent);

    const username = localStorage.getItem("userName");
    if (username) {
        navigate('/game');;
    } else {
        navigate('/');;
    }
  };

  const updateTable = (data) => {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = '';

    data.forEach((entry) => {
      const row = document.createElement('tr');

      const playerNameCell = document.createElement('td');
      playerNameCell.textContent = entry.name;

      const winningPercentageCell = document.createElement('td');
      winningPercentageCell.textContent = entry.perc;

      const actionCell = document.createElement('td');
      const playButton = document.createElement('button');
      playButton.textContent = 'Play';
      playButton.addEventListener('click', () => startGame(entry.playerName));
      actionCell.appendChild(playButton);

      row.appendChild(playerNameCell);
      row.appendChild(winningPercentageCell);
      row.appendChild(actionCell);

      tableBody.appendChild(row);
    });
  };

  const onStartup = () => {
    getPlayers();
    // Add other logic as needed from your original function
  };

  const getPlayers = async () => {
    try {
      const response = await fetch('/api/players', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      });

      const scores = await response.json();
      localStorage.setItem('players', JSON.stringify(scores));
      setPlayers(scores);
    } catch (error) {
      console.log("Failed to get players:", error);
    }
  };

  useEffect(() => {
    onStartup();
  }, []); // Run onStartup once on component mount

  return (
    <main>
      <h2>Active Users</h2>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Winning Percentage</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.perc}</td>
              <td>
                <button onClick={() => startGame(player.playerName)}>Play</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div></div>
      <button class = "randUser" onClick={() => startGame(this)}>Play Random User</button>
      <button class = "bot" onClick={() => startGame(this)}>Play Bot</button>
    </main>
  );
}
