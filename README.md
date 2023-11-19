# Startup Specification

## Elevator Pitch
I plan on making a game that allows people to play a game of War (the card game) with another person online. I think that this could be a fun and easy game to play with other people. People could play with their friends or with a stranger. Their winning percentage would be kept track of and be displayed on a leaderboard. 

## Key Features

### Authentication
They will be able to log in with a username and a password, this will allow the server to know who is playing in that instance. 

### Leaderboard
The server will be connected to a database that will store a person's login info and their win/loss record. The people with the best win/loss ratio will be shown on a leaderboard that every user will be able to see.

### Game Play
Once a game has been started the users will share game data through a websocket and that will determine who will win each round. They will each start out with half a deck of cards, they will each play a card and whoever has the higher card gets both cards. The virtual cards will be traded through a websocket. The person with the whole deck at the end wins. 


## Concept Images
### Login Page
![login](https://github.com/ninjaluke45/startup/assets/97245977/7cacb46d-74b3-43f4-aa5a-49c19d151a45)
### Lobby
![lobby](https://github.com/ninjaluke45/startup/assets/97245977/7e0c1dab-c761-48b6-a6d0-4741e94bfd54)
### Game
![game](https://github.com/ninjaluke45/startup/assets/97245977/cc74b532-490a-492e-8b1c-110516c594e4)

## HTML Deliverable
For this deliverable I built out the structure of my application using HTML.

<ul>
  <li>HTML pages - Four HTML pages that give a place to login, join a game, play the game, and view a leaderboard</li>
  <li>Links - Each page has a link to the other pages</li>
  
  <li>Text - there are labels for each function that a user is able to take</li>
  <li>Images - In the play screen there are pictures for the backs of playing cards</li>
  <li>Login - Input boxes and submit button for login.</li>
  <li>Database - data base will hold current users and the high scores of all users</li>
  <li>WebSocket - Websockets will transfer the data of who played what cards. </li>
</ul>

## CSS Deliverable
For this deliverable I made the layout into a design that I liked.

<ul>
  <li>Links - I made it so that when you hover over a link it underlines it</li>
  <li>Colors - I added colors to the project in a way that I liked</li>
  <li>Tables - The tables in the project have different colored rows for added legibility</li>
  <li>Buttons - buttons have curved edges and a different font</li>
  <li>Input Boxes - I added a border to the login box and gave it rounded edges</li>
  
</ul>

## JS Deliverable
For this deliverable I added game logic and other useful functionality.

<ul>
  <li>Login - Added a function that will save login data to local storage</li>
  <li>Database data - I added functions that will be useful in updating tables based on database data</li>
  <li>Websocket - I added game logic that could be used to play with another person</li>
  <li>Bot game - I added a bot verison of the game to prove that game logic works</li>
  <li>Win loss data - win loss percentages are stored locally adn sent to the database if possible</li>
  
</ul>

## Start up Service
For this deliverable I added the ability for the frontend to communicate with the backend.

<ul>

  <li>Uploaded an HTTP service with Node.js and Express</li>
  <li>I send the frontend to the browser from the backend using express static middleware</li>
  <li>My frontend has space allocated for third party service endpoints</li>
  <li>My backend can recieve and send data about users and their win/loss record</li>
  <li>My frontend can send and recieve data about users and their win/loss record</li>
  
</ul>

## DB deliverable
For this deliverable I added the ability to connect to mongo db

<ul>

  <li>made a mongodb to connect to</li>
  <li>I send the frontend to the browser from the backend using express static middleware</li>
  <li>backend endpoints for manipulating application data added to index.j</li>
  <li>Stores application data in MongoDB</li>

</ul>


## Login deliverable
For this deliverable I added the ability to login to the website

<ul>

  <li>Supports new user registration</li>
  <li>Stores and retrieves credentials in MongoDB</li>
  <li>Supports existing user authentication</li>
  <li>If you haven't logged in on the browser you are in you cannot play the game</li>

</ul>












