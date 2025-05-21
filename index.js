let donutCount = 0;
let autoClickers = 0;
let autoClickerCost = 100;

const donutImage = document.getElementById("donutImage");
const donutCounter = document.getElementById("donutCounter");
const autoClickerButton = document.getElementById("autoClickerButton");
const autoClickerCounter = document.getElementById("autoClickerCounter");
const autoClickerCostDisplay = document.getElementById("autoClickerCostDisplay");
const resetButton = document.getElementById("resetButton");

// 🍩 Clicking the donut manually
donutImage.addEventListener("click", () => {
  donutCount++;
  updateDonutCounter();
});

// 🛒 Purchasing an Auto Clicker
autoClickerButton.addEventListener("click", () => {
  if (donutCount >= autoClickerCost) {
    donutCount -= autoClickerCost;
    autoClickers++;
    autoClickerCost = Math.floor(autoClickerCost * 1.15); // price increase

    updateDonutCounter();
    updateAutoClickerUI();
  }
});

// 🔁 Auto Clicker Function
setInterval(() => {
  donutCount += autoClickers;
  updateDonutCounter();
}, 1000);

// 🔄 Reset Game
resetButton.addEventListener("click", () => {
  donutCount = 0;
  autoClickers = 0;
  autoClickerCost = 100;
  updateDonutCounter();
  updateAutoClickerUI();
});

// 🔧 Helper Functions
function updateDonutCounter() {
  donutCounter.textContent = `${donutCount} Donuts`;
}

function updateAutoClickerUI() {
  autoClickerCounter.textContent = autoClickers;
  autoClickerCostDisplay.textContent = `Cost: ${autoClickerCost}`;
}