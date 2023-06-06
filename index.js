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

