let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let newgamebtn=document.querySelector(".newgame");
let wincontainer=document.querySelector(".wincontainer");
let winner=document.querySelector(".winner");

let turnO=true ;
let clickCount=0;

boxes.forEach((box) => {

    box.addEventListener("click" ,() => {
        clickCount++;
        if(turnO){
            box.innerText="O"
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }

        box.disabled=true;
        checkWin();
    })

})

const winPatterns = [
  [0, 1, 2], // Row 1
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3

  [0, 3, 6], // Column 1
  [1, 4, 7], // Column 2
  [2, 5, 8], // Column 3

  [0, 4, 8], // Main diagonal
  [2, 4, 6]  // Anti-diagonal
];



drawinGame = () => {
    winner.innerText="It's a Draw!";
    wincontainer.classList.remove("hide");
    disableBoxes();
}

showWinner = (winnerText) => {
    winner.innerText="Winner is " + winnerText ;
    wincontainer.classList.remove("hide");
    disableBoxes();
}

disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled=true;
    })
}

enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled=false;
    })
}

checkWin = () => {
    for(let patternIndex = 0; patternIndex < winPatterns.length; patternIndex++){
        const pattern = winPatterns[patternIndex];
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1, patternIndex);
                return;
            }
        }
    }

    if(clickCount==9){
        drawinGame();
    }
}

resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
    })
    wincontainer.classList.add("hide");
    winner.innerText = "WINNER";
    turnO = true;
    clickCount = 0;
    enableBoxes();
})

newgamebtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
    })
    wincontainer.classList.add("hide");
    winner.innerText = "WINNER";
    turnO = true;
    clickCount = 0;
    enableBoxes();
})

