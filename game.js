function setUp(){
    console.log("Set up started");
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

}

setUp()


