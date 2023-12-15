import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Lobby } from './lobby/lobby';
import { Leaderboard } from './leaderboard/leaderboard';
import { Game } from './game/game';
// import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import './lobby/lobby.css';
import './leaderboard/leaderboard.css';
import './game/game.css';

function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');


  return (
    <BrowserRouter>
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>War</title>
    <link rel="icon" href="favicon.ico" />
  </head>
    <body>
      <header>
      <h1>Luke's Game of War</h1>

      
      <nav>
        <menu>
            

          <li className='nav-item'>
                  <NavLink className='nav-link' to=''>
                    Home
                  </NavLink>
            </li>
            <li className='nav-item'>
                  <NavLink className='nav-link' to='lobby'>
                    Lobby
                  </NavLink>
            </li>
            <li className='nav-item'>
                  <NavLink className='nav-link' to='leaderboard'>
                    Leaderboard
                  </NavLink>
            </li>
            
          
        </menu>
      </nav>
      <hr />
    </header>

    

        <Routes>
          <Route path='/' element={ <Login/>}exact/>
          <Route path='/lobby' element={<Lobby />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

    <footer>
      <hr />
      <span class="text-reset">Author Name(s)</span>
      <br />
      <a href="https://github.com/ninjaluke45/startup">Luke's GitHub</a>
    </footer>
    </body>
      
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
