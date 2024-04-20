let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score")
const compScorePara =document.querySelector("#comp-score")


const getCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock paper scissors
}

    const drawGame = () => {
        msg.innerText = "game was draw";
        msg.style.backgroundColor = "#081b31"

    };

    const showwinner = (userWin,userChoice,compChoice) =>{
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `you win ! your ${userChoice} beats ${compChoice}`
            msg.style.backgroundColor = "green"
        }else{
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `you lose ${compChoice} beats ${userChoice}`
            msg.style.backgroundColor = "red"

        }
    };

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = getCompChoice();
    console.log("comp choic =",compChoice);

    if(userChoice === compChoice){
        //draw game
      drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
          userWin = compChoice === "scissors"? false: true;
        }else{
            userWin = compChoice ==="rock" ? false : true ;
        }
        showwinner(userWin,userChoice,compChoice);
    }
}


choices.forEach ((choice) => {
     choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});