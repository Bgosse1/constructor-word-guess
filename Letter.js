function Letter(character){
    this.character = character;
    this.guessed = false;

    this.toString = function(){
        return this.guessed ? this.character : "_";
    };

    this.gussedCorrectly = function(char){
        if(char.toLowerCase() === this.character.toLowerCase()){
            this.guessed = true;
        }
    };
}
module.exports = Letter;
