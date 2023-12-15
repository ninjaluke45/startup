import React from 'react';

// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';

export function Game() {
  return (
    <main>
    <div>
        <h2 class="players">[username] vs. [other player]</h2>
        <h2 class="cardNum">Num cards: 26</h2>
        <button id = "startRoundButton">Play card</button>
      </div>
      
    
      <div class="card-container">
        <button class="card-left">
            <img alt="Playing card1" src="https://www.nikhilsmagicshop.com/image/cache/catalog/2020/mon_b_bakc-550x550.jpg" />
        </button>
    
        <button class="card-right">
            <img alt="Playing card2" src="https://www.nikhilsmagicshop.com/image/cache/catalog/2020/mon_b_bakc-550x550.jpg" />
        </button>
    </div>
    </main>
  );
}