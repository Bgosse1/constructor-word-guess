let word = require('./Word.js');
let inquirer = require('inquirer');
let wordList = require('./WordList');

function Game() {
    this.startGame = function () {
        this.userGuess();
    };
    this.userGuess = function () {
        inquirer
            .prompt([{
                type: "input",
                name: "userGuess",
                message: "Guess a letter!",
                validate: this.validateGuess
            }])
            .then(character => {
                console.log(character.userGuess);
            });
    };
    this.validateGuess = function(userGuess){
        return /^[a-zA-Z]$/.test(userGuess);
    };
    this.randomWord = function(){
        let secretWord = wordList[Math.floor(Math.random() * words.length)];
    }
}

let game = new Game();
game.startGame();