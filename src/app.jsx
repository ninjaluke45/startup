import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
// import { Login } from './login/login';
// import { Play } from './play/play';
// import { Scores } from './scores/scores';
// import { About } from './about/about';
// import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
//   const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
//   const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
//   const [authState, setAuthState] = React.useState(currentAuthState);

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
          <li><a href="index.html">Home</a></li>
          <li><a href="lobby.html">Lobby</a></li>
          <li><a href="leaderboard.html">Leaderboard</a></li>
          
        </menu>
      </nav>
      <hr />
    </header>

    <main>
    <h1>Welcome</h1>
    <p>Login to play</p>
    <form id="loginForm" method="get" action="lobby.html"  onsubmit="return login()"> 
        <input type="text" id="name" placeholder="Username" />
        <br /> 
        <input type="password" id="password" placeholder="Password" />
        <br /> 
        <button type="submit">Login</button>
    </form>
    </main>

        {/* <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/play' element={<Play userName={userName} />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes> */}

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
