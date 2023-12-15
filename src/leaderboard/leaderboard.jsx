import React from 'react';

// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';

export function Leaderboard() {
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
    <tr>
      <td>1</td>
      <td>Player 1</td>
      <td>.75</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Player 2</td>
      <td>.70</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Player 3</td>
      <td>.66</td>
    </tr>
        </tbody>
      </table>
      
      
    </main>
  );
}