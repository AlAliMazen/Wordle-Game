/**
 * defining varibales for storing 
 * 1- guessed word 
 * 2- aray where only 6 words are stored
 * 3- the true word which should be chosen from another array randomly
 * 4- index of available space to insert the letter at the right place
 * 
 */

let emptyLetterBx = 0;
let letter;
let expectedWord = '';
let expectedWordsArr = [];  //should only have 6 words
let rowIndex = 0;          //to know which word at which index check
let ltrsSquareArr = document.querySelectorAll(".letter-squar");
let keyboardBtns = document.querySelectorAll(".key");
let keyboardBtnsTxt = [];
let randomWord = "apply";


//get text vlaues from the NodeList of querySelector
function keyboardvalues(arr) {
    for (let i = 0; i < arr.length; i++) {
        keyboardBtnsTxt.push(arr[i].innerHTML);
    }
}
keyboardvalues(keyboardBtns);

//Default both submit and delete btns should be disabled
document.getElementById("submit-btn").disabled=true;
document.getElementById("del-btn").disabled=true;


function showInstructions() {
    let controllers = document.getElementById('controllers');
    controllers.style.display = 'none';

    let howToPlaySection = document.getElementById('game-instructions');
    howToPlaySection.style.display = 'block';

    let gameBoard = document.getElementById('game-board');
    gameBoard.style.display = 'none';

    let keyboard = document.getElementById('keyboard-container');
    keyboard.style.display = 'none';
}

function hideInstructions() {
    let controllers = document.getElementById('controllers');
    controllers.style.display = 'flex';
    controllers.style.justifyContent = 'space-around';
    controllers.style.alignItems = 'center';

    let gameBoard = document.getElementById('game-board');
    gameBoard.style.display = 'grid';
    gameBoard.style.gridTemplateColumns = "60px 60px 60px 60px 60px";
    gameBoard.style.gridTemplateRows = "65px 65px 65px 65px 65px 65px";
    gameBoard.style.justifyContent = "space-evenly";
    gameBoard.style.alignItems = "center"
    //gameBoard.style.gridGap="10px";

    let keyboard = document.getElementById('keyboard-container');
    keyboard.style.display = 'flex';
    keyboard.style.flexDirection = 'column';
    keyboard.style.justifyContent = 'space-between';
    keyboard.style.alignItems = 'center';

    let howToPlaySection = document.getElementById('game-instructions');
    howToPlaySection.style.display = 'none';
}

function insertLetter(usrTypedLtr) {
    ltrsSquareArr[emptyLetterBx].textContent = usrTypedLtr;
    expectedWord += usrTypedLtr;
    if(expectedWord.length<5){
        document.getElementById("submit-btn").disabled=true;
        //delete btn should be aciavted if user word is 1 letter long
        document.getElementById("del-btn").disabled=false;
    }else{
        document.getElementById("submit-btn").disabled=false;       
    }
    emptyLetterBx++;
}

function checkGuessedWord(usrWord) {
    debugger;
    if (usrWord.length === 5) {
        if (usrWord === randomWord) {
            window.alert("Hooray, you have guessed the right word");
        } else {
            if (rowIndex > 5) {
                window.alert("Game over ! right word is: " + randomWord)
            } else {
                //call a function to keep readability 
                compareWords(usrWord);
            }
        }
        //add expectedWord to the array, reset the expectedWord and move currentIndex to the second row
        expectedWordsArr.push(usrWord);
        expectedWord='';
        rowIndex++;
        document.getElementById("submit-btn").disabled=true;
        document.getElementById("del-btn").disabled=true;
        if(rowIndex>5){
            window.alert("Game over! right word is: "+randomWord)
        }
    } else {
        window.alert("Word must have 5 letters to be submitted")
    }
}
/**
 * 
 * @param {expected user word to start comparing process} usrWord 
 */
function compareWords(usrWord) {
    let letterPosition=0;
    switch(rowIndex){
        case 0:letterPosition=0;break;
        case 1:letterPosition=5;break;
        case 2:letterPosition=10;break;
        case 3:letterPosition=15;break;
        case 4:letterPosition=20;break;
        case 5:letterPosition=25;break;
    }
    for (let i = 0; i < usrWord.length; i++) {
        if (usrWord[i] === randomWord[i]) {
            //style letter in letter box and keyboard green background
            ltrsSquareArr[letterPosition+i].style.backgroundColor = "#06D6A0";
            giveColor(usrWord, i, 0);
        } else {
            if (randomWord.includes(usrWord[i])) {
                //style it as yellow because it is at wrong position
                ltrsSquareArr[letterPosition+i].style.backgroundColor = "#FFD166";
                giveColor(usrWord, i, 1);
            } else {
                //style it as gray because it is at wrong position
                ltrsSquareArr[letterPosition+i].style.backgroundColor = "#b2b0b0";
                giveColor(usrWord, i, 2);
            }
        }
    }
}

/**
 * 
 * @param {user input word} word 
 * @param {index inside the user word} index 
 * @param {0 for green 1 for yellow 2 for gray} colorIndex 
 */
function giveColor(word, index, colorIndex) {
    let keyboardKey = keyboardBtnsTxt.includes(word[index]);
    if (keyboardKey) {
        let position = keyboardBtnsTxt.indexOf(word[index]);
        switch (colorIndex) {
            case 0: keyboardBtns[position].style.backgroundColor = "#06D6A0";
                break;
            case 1: keyboardBtns[position].style.backgroundColor = "#FFD166";
                break;
            case 2: keyboardBtns[position].style.backgroundColor = "#b2b0b0";
                break;
                default:
                    window.alert("wrong index for coloring");
        }
    }
}

/**
 * 
 * @param {remove last letter from typed word and decrease the empty index tracker} expectedWord 
 */
function removeLastInput(expectedWord) {
    debugger;
    if(expectedWord.length>0){
        let tmpWord=expectedWord.slice(0,-1);
        emptyLetterBx--;
        if(tmpWord.length===0){
            document.getElementById("del-btn").disabled=true;
        }
        //remove from UI
        ltrsSquareArr[emptyLetterBx].textContent = "";
        return tmpWord;
    }else{
        window.alert("There is no more letters in the current row to remove!");
    }

    
}

//getting user input 
function getUsrInput(pressedKey) {
    letter = pressedKey.textContent;
    console.log(letter.toUpperCase());

    //call function to insert letter if letter not submit or Del
    if (letter !== "Submit" && letter !== "Del") {
        insertLetter(letter);
    } else if (letter === "Submit") {
        //check inserted word
        checkGuessedWord(expectedWord);
    } else {
        //remove last letter 
        expectedWord = removeLastInput(expectedWord);
        console.log(expectedWord);
    }
}