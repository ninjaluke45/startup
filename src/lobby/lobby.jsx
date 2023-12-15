import React from 'react';

// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';

export function Lobby() {
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
    <tr>
      <td>Player 1</td>
      <td>.75</td>
      <td><button>Play</button></td>
    </tr>
    <tr>
      <td>Player 2</td>
      <td>.25</td>
      <td><button>Play</button></td>
    </tr>
    <tr>
      <td>Player 3</td>
      <td>.66</td>
      <td><button>Play</button></td>
    </tr>
        </tbody>
      </table>
      <div></div>
      <button class = "randUser" onclick="startGame(this)">Play Random User</button>
      <button class = "bot" onclick="startGame(this)">Play Bot</button>

      
    </main>
  );
}