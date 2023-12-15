class Card {
    constructor(parameter1, parameter2) {
        this.cardNumber = parameter1;
        this.cardSuit = parameter2;
    }

    get suit() {
        return this.cardSuit;
    }


    get number() {
        return this.cardNumber;
    }
}

class GameOfWar {
    constructor(bot) {
        this.bot = bot;
        this.userDeck = buildDeck();
        this.botDeck = bot ? buildDeck() : null; // Create bot's deck only if bot is enabled
        this.junkDeck = []
        this.over = false;
        this.win = false;

        if (bot) {
            this.playBotWithButton();
        }
        else{
            this.playOppWithButton();
        }

        
    }

    playOppWithButton() {
        const startRoundButton = document.getElementById('startRoundButton'); // Replace with your actual button
        

        if(this.userDeck.length == 0){
            winner(False);
            window.location.href = "lobby.html";
        }

        else if(this.botDeck.length == 0){
            winner(True);
            window.location.href = "lobby.html";
        }

        

        startRoundButton.addEventListener('click', async () => {
            updateCount(this.userDeck.length);


            const playerCard = this.userDeck.pop();
            const botCard = this.botDeck.pop();
            console.log("user")
            console.log(playerCard)
            console.log()
            console.log(botCard)
            console.log()

            replacePhotoLink(true, playerCard);
            replacePhotoLink(false, botCard);

                // Compare playerCard and botCard and determine the winner
            const roundWinner = compareCards(playerCard, botCard);


            if (roundWinner === 'W') {
                this.userDeck.unshift(playerCard, botCard);
            } else if (roundWinner === 'L') {
                this.botDeck.unshift(botCard, playerCard);
            }else{
                this.junkDeck.unshift(botCard, playerCard);
            }

            // Update the count and shuffle decks here

            

            shuffleArray(this.userDeck);
            shuffleArray(this.botDeck);

            

            console.log("userdeck")
            console.log(this.userDeck.length)
            // console.log(this.userDeck)

            console.log("botdeck")
            console.log(this.botDeck.length)
            console.log()
            // console.log(this.botDeck)

            // Pause for a brief moment between rounds (adjust as needed)
            await new Promise((resolve) => setTimeout(resolve, 1000));
        
        });

    }
}

    playBotWithButton() {
        const startRoundButton = document.getElementById('startRoundButton'); // Replace with your actual button
        

        if(this.userDeck.length == 0){
            winner(False);
            window.location.href = "lobby.html";
        }

        else if(this.botDeck.length == 0){
            winner(True);
            window.location.href = "lobby.html";
        }

        

        startRoundButton.addEventListener('click', async () => {
            updateCount(this.userDeck.length);


            const playerCard = this.userDeck.pop();
            const botCard = this.botDeck.pop();
            console.log("user")
            console.log(playerCard)
            console.log()
            console.log(botCard)
            console.log()

            replacePhotoLink(true, playerCard);
            replacePhotoLink(false, botCard);

                // Compare playerCard and botCard and determine the winner
            const roundWinner = compareCards(playerCard, botCard);


            if (roundWinner === 'W') {
                this.userDeck.unshift(playerCard, botCard);
            } else if (roundWinner === 'L') {
                this.botDeck.unshift(botCard, playerCard);
            }else{
                this.junkDeck.unshift(botCard, playerCard);
            }

            // Update the count and shuffle decks here

            

            shuffleArray(this.userDeck);
            shuffleArray(this.botDeck);

            

            console.log("userdeck")
            console.log(this.userDeck.length)
            // console.log(this.userDeck)

            console.log("botdeck")
            console.log(this.botDeck.length)
            console.log()
            // console.log(this.botDeck)

            // Pause for a brief moment between rounds (adjust as needed)
            await new Promise((resolve) => setTimeout(resolve, 1000));
        
        });

    }


setUp()

function setUp(){
    console.log("Set up started");
    const bot = getNames();

    const game = new GameOfWar(bot);



}






function buildDeck(){
    const myArray = [];

    for (let i = 1; i < 14; i++) {
        const card = new Card(i, "R");
        myArray.push(card);
    }

    for (let i = 1; i < 14; i++) {
        const card = new Card(i, "B");
        myArray.push(card);
    }

    shuffleArray(myArray);

    return myArray;

}



function getNames(){
    const username = localStorage.getItem('userName');
    const opponent = localStorage.getItem('opponent');

    console.log("Username: " + username);
    console.log("Opponent: " + opponent);


    const element = document.getElementsByClassName('players')[0];
    const initialValue = element.textContent;

    const wordToReplace = '[username]';
    const wordToReplace2 = '[other player]';

    

    const updatedValue = initialValue.replace(wordToReplace, username);
    const updatedValue2 = updatedValue.replace(wordToReplace2, opponent);

    element.textContent = updatedValue2;

    if(opponent == "bot"){
        return true;
    }
    else{
        return false;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function replacePhotoLink(user, userCard) {
    // Get the image element by its ID or any other means
    var imageElement = document.querySelector('img[alt="Playing card1"]');
    if(!user){
        imageElement = document.querySelector('img[alt="Playing card2"]');
    }

    var newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/English_pattern_king_of_spades.svg/40px-English_pattern_king_of_spades.svg.png';

    if(userCard.cardSuit == "R"){
        if(userCard.cardNumber == 1){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/English_pattern_ace_of_diamonds.svg/40px-English_pattern_ace_of_diamonds.svg.png';
        }
        else if(userCard.cardNumber == 2){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/English_pattern_2_of_diamonds.svg/40px-English_pattern_2_of_diamonds.svg.png';
        }
        else if(userCard.cardNumber == 3){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/English_pattern_3_of_diamonds.svg/40px-English_pattern_3_of_diamonds.svg.png';
        }
        else if(userCard.cardNumber == 4){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/English_pattern_4_of_diamonds.svg/40px-English_pattern_4_of_diamonds.svg.png';
        }
        else if(userCard.cardNumber == 5){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/English_pattern_5_of_diamonds.svg/40px-English_pattern_5_of_diamonds.svg.png';
        }
        else if(userCard.cardNumber == 6){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/English_pattern_6_of_diamonds.svg/40px-English_pattern_6_of_diamonds.svg.png';
        }
        else if(userCard.cardNumber == 7){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/English_pattern_7_of_diamonds.svg/40px-English_pattern_7_of_diamonds.svg.png';
        }
        else if(userCard.cardNumber == 8){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/English_pattern_8_of_diamonds.svg/40px-English_pattern_8_of_diamonds.svg.png';
        }
        else if(userCard.cardNumber == 9){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/English_pattern_9_of_diamonds.svg/40px-English_pattern_9_of_diamonds.svg.png';
        }
        else if(userCard.cardNumber == 10){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/English_pattern_10_of_diamonds.svg/40px-English_pattern_10_of_diamonds.svg.png';
        }
        else if(userCard.cardNumber == 11){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/English_pattern_jack_of_diamonds.svg/40px-English_pattern_jack_of_diamonds.svg.png';
        }
        else if(userCard.cardNumber == 12){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/English_pattern_queen_of_diamonds.svg/40px-English_pattern_queen_of_diamonds.svg.png';
        }
        else if(userCard.cardNumber == 13){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/English_pattern_king_of_diamonds.svg/40px-English_pattern_king_of_diamonds.svg.png';
        }


    }

    else{
        if(userCard.cardNumber == 1){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/English_pattern_ace_of_spades.svg/40px-English_pattern_ace_of_spades.svg.png';
        }
        else if(userCard.cardNumber == 2){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/English_pattern_2_of_spades.svg/40px-English_pattern_2_of_spades.svg.png';
        }
        else if(userCard.cardNumber == 3){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/English_pattern_3_of_spades.svg/40px-English_pattern_3_of_spades.svg.png';
        }
        else if(userCard.cardNumber == 4){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_pattern_4_of_spades.svg/40px-English_pattern_4_of_spades.svg.png';
        }
        else if(userCard.cardNumber == 5){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/English_pattern_5_of_spades.svg/40px-English_pattern_5_of_spades.svg.png';
        }
        else if(userCard.cardNumber == 6){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/English_pattern_6_of_spades.svg/40px-English_pattern_6_of_spades.svg.png';
        }
        else if(userCard.cardNumber == 7){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/English_pattern_7_of_spades.svg/40px-English_pattern_7_of_spades.svg.png';
        }
        else if(userCard.cardNumber == 8){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/English_pattern_8_of_spades.svg/40px-English_pattern_8_of_spades.svg.png';
        }
        else if(userCard.cardNumber == 9){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/English_pattern_9_of_spades.svg/40px-English_pattern_9_of_spades.svg.png';
        }
        else if(userCard.cardNumber == 10){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/English_pattern_10_of_spades.svg/40px-English_pattern_10_of_spades.svg.png';
        }
        else if(userCard.cardNumber == 11){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/English_pattern_jack_of_spades.svg/40px-English_pattern_jack_of_spades.svg.png';
        }
        else if(userCard.cardNumber == 12){
            newImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/English_pattern_queen_of_spades.svg/40px-English_pattern_queen_of_spades.svg.png';
        }
       
    }


       
    imageElement.src = newImageUrl;
    const currentScale = getComputedStyle(imageElement).transform;
    const newScale = currentScale === 'none' ? 8 : parseFloat(currentScale) + 0.5; // You can adjust the scaling factor (e.g., 1.5) as needed
    imageElement.style.transform = `scale(${newScale})`;


}
   




function compareCards(card1, card2) {
    if(card1.cardNumber > card2.cardNumber){
        return "W"
    }
    else if(card2.cardNumber > card1.cardNumber){
        return "L"
    }
    else{
        return "T"
    }

}

function updateCount(numCards){

    const element = document.getElementsByClassName('cardNum')[0];

    const updatedValue = "Num cards: " + String(numCards);

    element.textContent = updatedValue;

  
}

function winner(win){
    
    const totalGames = localStorage.getItem('totGames');

    const totGames = parseInt(totalGames);

    saveScore(localStorage.getItem("username"), win)


    //win data from the data base would be accessed here

    if (!isNaN(totGames)) {
        localStorage.setItem('totGames', (totGames + 1).toString());
    } else {
        localStorage.setItem('totGames', (1).toString());
    }

    const totalWins = localStorage.getItem('totWins');

    const totWins = parseInt(totalWins);

    if (!isNaN(totWins)&&win) {
        localStorage.setItem('totWins', (totWins + 1).toString());
    } else {
        localStorage.setItem('totWins', (1).toString());
    }

}

async function saveScore(name, win) {
    const newScore = {name: name, win: win};

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newScore),
      });

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      console.log("unable to connect to server")
    }
  }
