// Dount Count
let dountCount = 0;

const donutCounter = document.createElement("h1");
donutCounter.innerText = dountCount;
document.querySelector(".container").appendChild(donutCounter);

const donutButton = document.createElement("button");
donutButton.innerText = "Donut Maker";
document.querySelector(".container").appendChild(donutButton);

donutButton.addEventListener("click", () => {
  dountCount++;
  donutCounter.innerText = dountCount;
});


// Auto Clicker
let autoClickerCount = 0;
let autoClickerCost = 100;

const autoClickerCounter = document.createElement("h2");
autoClickerCounter.innerText = autoClickerCount;
document.querySelector(".container").appendChild(autoClickerCounter);

const autoClickerButton = document.createElement("button");
autoClickerButton.innerText = "Auto Clicker";
document.querySelector(".container").appendChild(autoClickerButton);

const autoClickerCostDisplay = document.createElement("h3");
autoClickerCostDisplay.innerText = `Cost: ${autoClickerCost}`;
document.querySelector(".container").appendChild(autoClickerCostDisplay);

autoClickerButton.addEventListener("click", () => {
  if (dountCount >= autoClickerCost) {
    dountCount -= autoClickerCost;
    autoClickerCount++;
    autoClickerCounter.innerText = autoClickerCount;
    donutCounter.innerText = dountCount;
    autoClickerCost = Math.floor(autoClickerCost * 1.1); // 10% increase
    autoClickerCostDisplay.innerText = `Cost: ${autoClickerCost}`; // update cost
  }
});




