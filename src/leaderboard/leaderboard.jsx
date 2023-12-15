import React, { useEffect, useState } from 'react';

export function Leaderboard() {
  const [scores, setScores] = useState([]);

  const updateTable = (data) => {
    return data.map((entry, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{entry.name}</td>
        <td>{String(Math.round((entry.win / entry.total) * 100))}</td>
      </tr>
    ));
  };

  useEffect(() => {
    const onStartup = async () => {
      try {
        const response = await fetch('/api/scores', {
          method: 'GET',
          headers: { 'content-type': 'application/json' },
        });

        const scoresData = await response.json();
        localStorage.setItem('scores', JSON.stringify(scoresData));
        setScores(scoresData);
      } catch (error) {
        console.log("Failed to get scores:", error);
        // Handle error fetching scores if needed
      }
    };

    onStartup();
  }, []); // Run onStartup once on component mount

  return (
    <main>
      <h2>High Scores</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player Name</th>
            <th>Winning Percentage</th>
          </tr>
        </thead>
        <tbody>
          {updateTable(scores)}
        </tbody>
      </table>
    </main>
  );
}
