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

 //Scoring right letter + right position = 20 points, right leter and wrong position =10, every crow is -5 
let usrScore=0;    


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
    gameBoard.style.gridTemplateColumns = "repeat(5,1fr)";
    gameBoard.style.gridTemplateRows = "repeat(6,1fr)";
    gameBoard.style.justifyContent = "space-around";
    gameBoard.style.justifyItems="stretch";
    //gameBoard.style.gridGap="10px";

    let keyboard = document.getElementById('keyboard-container');
    keyboard.style.display = 'flex';
    keyboard.style.flexDirection = 'column';
    keyboard.style.justifyContent = 'center';
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
    
    if (usrWord.length === 5) {
        if (usrWord === randomWord) {
            compareWords(usrWord);
            expectedWordsArr.push(usrWord);
            if(rowIndex===0){
                usrScore+=30;
                //show play again button
            }else{
                updateScore(rowIndex);
            }
            writeScore();
            window.alert("Hooray, you have guessed the right word");
            
            
            return;
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
        updateScore(rowIndex);
        writeScore();
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
            //right letter and right position
            usrScore+=20;
            writeScore();
        } else {
            if (randomWord.includes(usrWord[i])) {
                //style it as yellow because it is at wrong position
                ltrsSquareArr[letterPosition+i].style.backgroundColor = "#FFD166";
                giveColor(usrWord, i, 1);

                //right letter but wrong position
                usrScore+=10;
                writeScore();
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
/**
 * 
 * @param {row index to see how many tries and decrease the score} indx 
 */
function updateScore(indx){
    switch(indx){
        case 0: usrScore-=5;
        break;
        case 1: usrScore-=10;
        break;
        case 2: usrScore-=15;
        break;
        case 3: usrScore-=20;
        break;
        case 4: usrScore-=25;
        break;
        case 5: usrScore-=30;
        break;
    }
}

function writeScore(){
    let scoreHTML=document.getElementById('score');
    scoreHTML.innerHTML=usrScore+ " points";
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