"use strict";

let total = 0;
let totalCounter = document.querySelector(".counter");

let popButton = document.querySelector(".popButton");
popButton.addEventListener("click", () => {
  let popPrice = parseFloat(popButton.getAttribute("data-price"));
  total += popPrice;
  totalCounter.innerText = `Total: $${total}`;
  console.log(total.toFixed(2));
});

let chocolateButton = document.querySelector(".chocolateButton");
chocolateButton.addEventListener("click", () => {
  let chocolatePrice = parseFloat(chocolateButton.getAttribute("data-price"));
  total += chocolatePrice;
  totalCounter.innerText = `Total: $${total}`;
  console.log(total.toFixed(2));
});

let candyButton = document.querySelector(".candyButton");
candyButton.addEventListener("click", () => {
  let candyPrice = parseFloat(candyButton.getAttribute("data-price"));
  total += candyPrice;
  totalCounter.innerText = `Total: $${total}`;
  console.log(total.toFixed(2));
});

let chipButton = document.querySelector(".chipButton");
chipButton.addEventListener("click", () => {
  let chipPrice = parseFloat(chipButton.getAttribute("data-price"));
  total += chipPrice;
  totalCounter.innerText = `Total: $${total}`;
  console.log(total.toFixed(2));
});

totalCounter.innerText = `Total: $${total}`;

//----------question 2---------------

const makeMoney = document.querySelector(".makeMoney");
makeMoney.addEventListener("submit", (e) => {
  e.preventDefault();
  const moneyData = new FormData(makeMoney);
  const howMany = moneyData.get("howMany");
  const whichCoin = moneyData.get("whichCoin");
  const showCoin = document.querySelector(".showCoin");
  for (let i = 0; i < howMany; i++) {
    const coin = document.createElement("div");
    coin.className = whichCoin;
    coin.innerText = whichCoin;
    showCoin.append(coin);
  }
});

//-----------question 3---------------------
const lightBulb = document.querySelector(".lightIsOff");
const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const toggleButton = document.querySelector(".toggle");
const endButton = document.querySelector(".end");

const turnOn = () => {
  lightBulb.classList.replace("lightIsOff", "lightIsOn");
};

const turnOff = () => {
  lightBulb.classList.replace("lightIsOn", "lightIsOff");
};

onButton.addEventListener("click", turnOn);

offButton.addEventListener("click", turnOff);

toggleButton.addEventListener("click", () => {
  if (lightBulb.classList.contains("lightIsOn")) {
    turnOff();
  } else {
    turnOn();
  }
});

endButton.addEventListener("click", () => {
  onButton.disabled = true;
  offButton.disabled = true;
  toggleButton.disabled = true;
  endButton.disabled = true;
  lightBulb.remove();
});

// or this...........................

// onButton.addEventListener("click", turnOn) => {
//   lightBulb.classList.replace("lightIsOff", "lightIsOn");
// });

// offButton.addEventListener("click", () => {
//   lightBulb.classList.replace("lightIsOn", "lightIsOff");
// });

// toggleButton.addEventListener("click", () => {
//   if (lightBulb.classList.contains("lightIsOn")) {
//     lightBulb.classList.replace("lightIsOn", "lightIsOff");
//   } else {
//     lightBulb.classList.replace("lightIsOff", "lightIsOn");
//   }
// });
