//Initial Conditions
let wins = 0;
let losses = 0;
let allGuesses =[];
let totalChances = 9;
let answer="";

//get html link
let totalWins = document.getElementById("wins");
let chancesLeft = document.getElementById("chances");
let psychicMessage = document.getElementById("message");
let totalLosses = document.getElementById("losses");
let userGuess = document.getElementById("user-guess");

//start a new game (does not reset win/loss)
function newGame(){
    allGuesses =[];
    totalChances = 9;
    answer=String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    console.log(answer);
    userGuess.textContent = allGuesses;
    chancesLeft.textContent= totalChances;

}

//get a list of valid letters - extra
let allLetters=[];
for(i=97;i<=122;i++){
    allLetters.push(String.fromCharCode(i));
}

//first game only
newGame();
totalWins.textContent=wins;
totalLosses.textContent=losses;

//player logic for game
document.onkeyup=function(recordGuess){
    if(allLetters.includes(recordGuess.key.toLowerCase())){
        if(recordGuess.key!==answer){
            if(allGuesses.includes(recordGuess.key)){
                userGuess.textContent = allGuesses + "  <-- already guessed!";
            } else { 
                totalChances--;
                if(totalChances===0){
                    losses++;
                    totalLosses.textContent=losses;
                    psychicMessage.textContent = "Sorry! Let's try again. NOW... ";
                    newGame();
                } else {
                    allGuesses.push(recordGuess.key.toLowerCase());
                    userGuess.textContent = allGuesses;
                    chancesLeft.textContent= totalChances;
                }
            }
        } else {
            psychicMessage.textContent = "YES! Are you psychic?? NOW... ";
            wins++;
            totalWins.textContent=wins;
            newGame();
        }
    }else{
        userGuess.textContent = allGuesses + "  <-- not a letter. Stay focused!";
    }
}      
    
function counter(entry,interval){
    if (interval<0) entry-=interval;
    else {if (interval>=0) entry+=interval};  
}

