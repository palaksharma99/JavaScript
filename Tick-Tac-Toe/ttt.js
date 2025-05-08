let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let winnerMsg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;   //player O

const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let count = 0;

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if(turnO === true){
            box.style.backgroundColor = "rgb(216, 41, 85)";
            box.style.color = "white";
            box.innerText = "O";
            turnO= false;
        }
        else{
            box.style.color = "white";
            box.style.backgroundColor = "rgb(226, 50, 118)";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

        count++;
        if(count === 9 && !checkWinner()){
            showDraw();
        }
    });
});

const disableBoxes = ()=>{
    for(let i of boxes){
        i.disabled = true;
    }
};

const enableBoxes = ()=>{
    for(let i of boxes){
        i.disabled = false;
        i.innerText = "";
        i.style.backgroundColor = "white";
    }
};

const showWinner = (winner)=>{
    winnerMsg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
    for(let i of winningPatterns){
        let posVal1 = boxes[i[0]].innerText;
        let posVal2 = boxes[i[1]].innerText;
        let posVal3 = boxes[i[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2===posVal3){
                console.log("winner!");
                showWinner(posVal1);
            }
        }
    };
};

const showDraw = ()=>{
    winnerMsg.innerText = "It's a DRAW!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const resetGame = ()=>{
    enableBoxes();
    msgContainer.classList.add("hide");
    turnO = true;
};

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);