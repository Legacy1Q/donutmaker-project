// Donut Count
let dountCount = 0;

const donutCounter = document.createElement("h1");
donutCounter.innerText = dountCount;
document.querySelector(".container").appendChild(donutCounter);

const donutButton = document.createElement("button");
donutButton.innerText = "Donut Maker";
document.querySelector(".container").appendChild(donutButton);

donutButton.addEventListener("click", () => {
  dountCount++;
  updateDonutCount();
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
    updateDonutCount();
    autoClickerCost = Math.floor(autoClickerCost * 1.1);
    autoClickerCostDisplay.innerText = `Cost: ${autoClickerCost}`;
  }
});

// Activate Auto Clicker
let autoClickerActive = false;

const activateAutoClickerButton = document.createElement("button");
activateAutoClickerButton.innerText = "Activate Auto Clicker";
document.querySelector(".container").appendChild(activateAutoClickerButton);

function automaticClick() {
  if (autoClickerActive) {
    const autoClickerMultiplier = 2;
    const autoClickerTotal = autoClickerCount * autoClickerMultiplier;
    dountCount += autoClickerTotal;
    updateDonutCount();
  }
}

function updateDonutCount() {
  donutCounter.innerText = dountCount;
}

activateAutoClickerButton.addEventListener("click", () => {
  if (autoClickerCount > 0) {
    autoClickerActive = true;
    setInterval(automaticClick, 1000);
  }
});
