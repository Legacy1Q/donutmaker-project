// Donut Count
let dountCount = 0;

const donutButton = document.createElement("img");
donutButton.innerText = "Donut Maker";
document.querySelector(".container").appendChild(donutImage);

donutImage.addEventListener("click", () => {
  dountCount++;
  updateDonutCount();
});



// Auto Clicker
let autoClickerCount = 0;
let autoClickerCost = 100;

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
  donutImage.alt = donutCount.toString();
}

activateAutoClickerButton.addEventListener("click", () => {
  if (autoClickerCount > 0) {
    autoClickerActive = true;
    setInterval(automaticClick, 1000);
  }
});
