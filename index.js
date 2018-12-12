let word = require('./Word.js');
let inquirer = require('inquirer');

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
}

let game = new Game();
game.startGame();