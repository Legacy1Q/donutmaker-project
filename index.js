// Donut Count
let donutCount = 0;

const donutButton = document.createElement("img");
document.querySelector(".container").appendChild(donutImage);

donutImage.addEventListener("click", () => {
  donutCount++;
  updateDonutCount();
});

function updateDonutCount() {
  donutCounter.innerText = donutCount;
  donutImage.alt = donutCount.toString(); 
  updateAutoClickerButton();
}

// Auto Clicker
let autoClickerCount = 0;
let autoClickerCost = 100;

let autoClickerActive = false;

function automaticClick() {
  if (autoClickerActive) {
    const autoClickerMultiplier = 2;
    const autoClickerTotal = autoClickerCount * autoClickerMultiplier;
    donutCount += autoClickerTotal;
    updateDonutCount();
  }
}

function updateAutoClickerButton() {
  autoClickerButton.disabled = donutCount < autoClickerCost;
  if (autoClickerButton.disabled) {
    autoClickerButton.classList.add("disabled");
  } else {
    autoClickerButton.classList.remove("disabled");
  }
}

updateAutoClickerButton()
autoClickerButton.addEventListener("click", () => {
  if (donutCount >= autoClickerCost) {
    donutCount -= autoClickerCost;
    autoClickerCount++;
    autoClickerCounter.innerText = autoClickerCount;
    updateDonutCount();
    autoClickerCost = Math.floor(autoClickerCost * 2.0); 
    autoClickerCostDisplay.innerText = `Cost: ${autoClickerCost}`; 
  }

  if (autoClickerCount > 0) {
    autoClickerActive = true;
    setInterval(automaticClick, 1000);
  }
});





