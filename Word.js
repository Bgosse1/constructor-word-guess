let letter = require('./Letter.js');
function Word(){
    this.lettersArray = [];
    this.word = function(){
        return true;
    }
    this.letterGuessed = function(character){
        return true;
    }
}


module.exports = Word;