let userscore = 0;
let computerscore = 0;
let choises = document.querySelectorAll(".mamoni");
let msg = document.querySelector("#msg")
let image=document.querySelector(".game")
let userpara = document.querySelector("#userscore")
let comppara=document.querySelector("#computerscore")
let userChoise=document.querySelector("#userchoise");
let cpuChoise=document.querySelector("#cpuchoise")

let genCompChoise = () => {
    let arr = ["rock", "paper", "scissor"]
    let imagearr=["rockPlayer.png","paperPlayer.png","scissorPlayer.png"]
    let unknown = Math.floor((Math.random()) * 3)
    
    cpuChoise.src = imagearr[unknown]
    return arr[unknown]
    
}
let drawGame = () => {
    msg.innerText = "The Game Is Draw"
    msg.style.background="blue"
    
}
let result = (userWin,mychoise,computerChoice) => {
    if (userWin) {
        userscore++;
        userpara.innerText=userscore
        msg.innerText = `You Winnnn!! my ${mychoise} bets ${computerChoice}`
        msg.style.background="green"
        msg.style.color="white"
    }
    else {
        computerscore++
        comppara.innerText=computerscore
        msg.innerText = `You Loose!!  ${computerChoice} bets my ${mychoise}`
        msg.style.background="red"
    }
}


let myGame = (mychoise) => {

    console.log("My Choise = ", mychoise);
    let computerchoise = genCompChoise();
    console.log("Computer Choise = ", computerchoise);
    if (mychoise === computerchoise) {
        drawGame()
    }

    else {
        let userWin = true;
        if (mychoise === "rock") {
            userWin = computerchoise === "paper" ? false : true;
        }
        else if (mychoise === "paper") {
            userWin = computerchoise === "scissor" ? false : true
        }
        else {
            userWin = computerchoise === "rock" ? false : true
        }
        result(userWin,mychoise,computerchoise)
    }
}
choises.forEach((choise) => {
    choise.addEventListener("click", (e) => {
        let mychoise = choise.getAttribute("id")
        userChoise.src=choise.src
        myGame(mychoise)
   });
     
});


