function Letter(character){
    this.character = character;
    this.guessed = false;

    this.toString = function(){
        return this.guessed ? this.character : "_";
    };

    this.gussedCorrectly = function(char){
        if(char === this.character){
            this.guessed = true;
        }
    };
}
module.exports = Letter;
