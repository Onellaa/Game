
let attempts = 0; 
let num = Math.floor(Math.random()*101);


const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");
const validationText = document.getElementById("validation");


submit.addEventListener('click',clickHappened );

function clickHappened(){
    const userValue = Number(guess.value);
    attempts++;
  if(attempts<3){
    if(userValue=== num){
        hint.textContent ="Congrat!!!🥳 you guessed it!!"
        
    }else if(userValue< num){
        hint.textContent ="Too low try again 😩!!"
    }else{
        hint.textContent ="Too high try again 😤!!"
    }


    attemptsText.textContent="Attempts : "+ attempts;
}else{
        attemptsText.innerHTML = "Attempts are over! YOU LOSE!! 😞 <br><br> The guessed number is " + num;
    }
  
}

