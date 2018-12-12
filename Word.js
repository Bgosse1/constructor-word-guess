let letter = require('./Letter.js');
function Word(secretWord){
    this.secretWord = secretWord;
    this.lettersArray = [];
    this.word = function(secretWord){
        for(var i = 0; i < secretWord.length; i++){
            let letterObj = new letter(secretWord[i]);
            this.lettersArray.push(letterObj);
        }
        return secretWord.toString();
    };
    this.letterGuessed = function(character){
        for(var j = 0; j < this.lettersArray.length; j++){
            this.lettersArray[j].gussedCorrectly(character);
        }
    };
}


module.exports = Word;

var newWord = new Word("ninja");
console.log(newWord.secretWord);
console.log(newWord.lettersArray);
newWord.word("ninja");
console.log(newWord.lettersArray);
newWord.letterGuessed("a");