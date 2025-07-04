let userscor = 0

let compscor = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const curmsg = document.querySelector(".currmsg")

const ys = document.querySelector("#ys")
const cs = document.querySelector("#cs")

const GenCompChoice = () => {
    let cho = ['Paper', 'Rock', 'Scissor']
    const idx = Math.floor(Math.random() * 3)
    return cho[idx]
}

const showWinner = (UserWin, Userchoice, compChoice) => {
    if (UserWin === true) {
        msg.innerText = `You Win! your ${Userchoice} beats computer's ${compChoice}`;
        userscor++;
        ys.innerText = userscor;
        curmsg.style.backgroundColor = "green";
    } else {
        msg.innerText = `You Lose! Computer's ${compChoice} beats your ${Userchoice}`;
        curmsg.style.backgroundColor = "red";
        compscor++;
        cs.innerText = compscor;
    }
};


const draw = () => {

    curmsg.style.backgroundColor = " #a7ba94"
    msg.innerText = "Match draw! Play Again."
}
const playGame = (Userchoice) => {
    console.log("User Choice:", Userchoice);

    const compChoice = GenCompChoice();
    console.log("Computer Choice:", compChoice);

    if (Userchoice === compChoice) {
        draw();
    } else {
        let UserWin = true;
        if (Userchoice === "Rock") {
            UserWin = compChoice === "Paper" ? false : true;
        } else if (Userchoice === "Paper") {
            UserWin = compChoice === "Rock" ? true : false;
        } else {
            UserWin = compChoice === "Rock" ? false : true;
        }

        // ✅ Pass all 3 values properly
        showWinner(UserWin, Userchoice, compChoice);
    }
};


choices.forEach((choice) => {


    choice.addEventListener("click", () => {
        const Userchoice = choice.getAttribute("id")
        playGame(Userchoice)

    })

});