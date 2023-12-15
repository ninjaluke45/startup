import React from 'react';

// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';

export function Login() {
  return (
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
  );
}