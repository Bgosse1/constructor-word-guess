function Letter(character){
    this.character = character;
    this.guessed = false;
    this.isGussed = function(){
        if(this.guessed === false){
            return "_";
        }
        else{
            return this.character;
        }
    };
    this.gussedCorrectly = function(char){
        if(char === this.character){
            this.guessed = true;
        }
    };
}

module.exports = Letter;
