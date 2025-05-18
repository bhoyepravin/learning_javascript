// Nested If Else
// if ke ander if else, else ke ander else if

 // we have create a Game for practice

 // 19 your guess is right
 // 17 too low
 // 20 too high

//  prompt Use for Take Input in js
// prompt is take inputs in string
// change it into number using +

 let winningNumber = 19 ;
 let userGuess = +prompt("Guess a number");

 if (userGuess === winningNumber){
    console.log("Your Guess is Right")
 }else{
    if(userGuess < winningNumber){
        console.log("Number is Low");
    }else{
        console.log("Number is High");
    }    
 }
