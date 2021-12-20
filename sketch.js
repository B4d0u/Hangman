//nonprotect
var words = [
  "Playstation",
  "Basketball",
  "Hello",
  "Gaming"
];


var word = words[Math.floor(Math.random() * words.length)];

var answerArray= [];


for (var i = 0; i < word.length; i++) {
     answerArray[i] = "_ ";
     }

var remainigLetters = word.length;

while (remainigLetters > 0){
  
 alert(answerArray);
 
 var guess = prompt("Guess a letter or click Annulla or cancel to exit");
  if (guess === null) {
   break; 
  } else if (guess.length !== 1) {
    alert ("Please enter a single letter");
  } else{
   
    for (var j = 0; j < word.length; j++){
      if (word[j] === guess) {
       answerArray[j] = guess;
        remainingLetters--;
      }
    }
    
  }
  
}