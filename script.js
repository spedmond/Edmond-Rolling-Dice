const dice1Output = document.getElementById("dice1Output");
const dice2Output = document.getElementById("dice2Output");
const total = document.getElementById("total");
const diceButton = document.getElementById("diceButton");

diceButton.addEventListener("click",roll); //when button is clicked call roll function

function roll() {
    let roll1 = Math.floor(Math.random()*6)+1; //declare value of first die
    let roll2 = Math.floor(Math.random()*6)+1; //declare value for second die
    dice1Output.textContent = roll1; //change output of dice1
    dice2Output.textContent = roll2; //change output of dice2
    let totalNum = roll1+roll2; //calc total
    total.textContent = totalNum; //change output of total
}
