
let numberOfDice = document.getElementById("numberOfDice");
let rollBtn = document.getElementById("rollBtn");
let resultElement = document.getElementById("result");

rollBtn.onclick = function() {
    let numDice = Number(numberOfDice.value);
    if (isNaN(numDice) || numDice <= 0) {
        resultElement.innerText = "Please enter a valid number of dice.";
        return;
    }

    let rolls = [];
    for (let i = 0; i < numDice; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        rolls.push(roll);
    }

    resultElement.textContent = `You rolled: ${rolls.join(", ")}`;
}