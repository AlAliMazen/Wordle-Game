/**
 * defining varibales for storing 
 * 1- guessed word 
 * 2- aray where only 6 words are stored
 * 3- the true word which should be chosen from another array randomly
 * 4- index of available space to insert the letter at the right place
 * 
 */

let emptyLetterBx=0;
let letter;
let expectedWord="";
let ltrsSquareArr=document.querySelectorAll(".letter-squar");


function showInstructions(){
    let controllers = document.getElementById('controllers');
    controllers.style.display = 'none';
    
    let howToPlaySection = document.getElementById('game-instructions');
    howToPlaySection.style.display='block';

    let gameBoard=document.getElementById('game-board');
    gameBoard.style.display='none';

    let keyboard=document.getElementById('keyboard-container');
    keyboard.style.display='none';
}

function hideInstructions(){
    let controllers = document.getElementById('controllers');
    controllers.style.display='flex';
    controllers.style.justifyContent='space-around';
    controllers.style.alignItems='center';

    let gameBoard=document.getElementById('game-board');
    gameBoard.style.display='grid';
    gameBoard.style.gridTemplateColumns="60px 60px 60px 60px 60px";
    gameBoard.style.gridTemplateRows="65px 65px 65px 65px 65px 65px";
    gameBoard.style.justifyContent="space-evenly";
    gameBoard.style.alignItems="center"
    //gameBoard.style.gridGap="10px";

    let keyboard=document.getElementById('keyboard-container');
    keyboard.style.display='flex';
    keyboard.style.flexDirection = 'column';
    keyboard.style.justifyContent ='space-between';
    keyboard.style.alignItems = 'center';

    let howToPlaySection = document.getElementById('game-instructions');
    howToPlaySection.style.display='none';
}

function insertLetter(usrTypedLtr){
    ltrsSquareArr[emptyLetterBx].textContent=usrTypedLtr;
    emptyLetterBx++;
}
//getting user input 
function getUsrInput(pressedKey){
    letter=pressedKey.textContent;
    console.log(letter.toUpperCase());
    
    //call function to insert letter if letter not submit or Del
    if(letter !=="Submit" && letter!=="Del"){
        insertLetter(letter);
    }else if(letter==="Submit"){
        //check inserted word
        checkGuessedWord();
    }else{
        //remove last letter 
        removeLastInput();
    }
}