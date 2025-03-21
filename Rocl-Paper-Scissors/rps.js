let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".select");
const msg = document.querySelector("#msg");
const msgBox = document.querySelector(".msg-box");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const compOption = Math.floor(Math.random()*3);
    return options[compOption];
}

const PlayGame = (userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        msg.innerText = "It's a DRAW!";
        msgBox.style.backgroundColor = "goldenrod";
    }
    else{
        const userOption = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }
        else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        updateUserScore();
        msg.innerText = `You Win! , ${userChoice} beats ${compChoice} , Score: ${userScore}`;
        msgBox.style.backgroundColor = "green";
    }
    else{
        compScore++;
        updateCompScore();
        msg.innerText = `Computer Win! , ${compChoice} beats ${userChoice} , Score: ${compScore}`;
        msgBox.style.backgroundColor = "red";
    }
};

const updateUserScore = ()=>{
    user.innerText = `${userScore}`;
};

const updateCompScore = ()=>{
    comp.innerText = `${compScore}`;
};

choices.forEach((i)=>{
    i.addEventListener("click",()=>{
        const userChoice = i.getAttribute("id");
        PlayGame(userChoice);
    });
});