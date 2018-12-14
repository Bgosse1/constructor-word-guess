let Letter = require('./Letter.js');

function Word(secretWord) {
    this.secretWord = secretWord;
    this.lettersArray = [];

    for (var i = 0; i < this.secretWord.length; i++) {
        let letterObj = new Letter(this.secretWord[i]);
        this.lettersArray.push(letterObj);
    }

    this.toString = function () {
        return this.lettersArray.join(' ');
    }

    this.letterGuessed = function (character) {
        for (var j = 0; j < this.lettersArray.length; j++) {
            this.lettersArray[j].gussedCorrectly(character);
        }
    };

    function hasBeenGuessed(currentValue) {
        return currentValue.guessed;
      }

    this.wordGuessed = function () {
        return this.lettersArray.every(hasBeenGuessed);
    }
}
module.exports = Word;