const cardHolder = document.getElementById("main-text");
const cardNumber = document.getElementById("num-number");
const dateNumber = document.getElementById("number");
const yearDate = document.getElementById("yy-number");
const cvcInput = document.getElementById("cvc-number");

/////////////
const cardName = document.getElementById("name-card");
const cardNum = document.getElementById("long-num");
const mmNumber = document.getElementById("mm-num");
const yyNumber = document.getElementById("yy-num");
const cvcNumber = document.getElementById("back-cvc");
/////////////
const wrong = document.getElementById("wrong-id");
const mmYy = document.getElementById("mm-yy");
const yyMm = document.getElementById("yy-mm");
const cvc = document.getElementById("mm-yy-cvc");

/////////////
const btn = document.getElementById("confirm");
const your = document.getElementById("your-details");
const yourText = document.getElementById("text-input");
let cardValue = "";
let numValue = 0;
let nameCard = "";
let copyNum = 0;
let mmNum = 0;
let yyNum = 0;
let cvcNum = 0;

//CARDHOLDER NAME
cardHolder.addEventListener("input", (event) => {
  cardValue = event.target.value;
  const regex = /[0-9]/gi;
  event.target.value = event.target.value.replace(regex, "");
  nameCard = cardValue;
  if (cardHolder.value.length + "") {
    cardHolder.style.borderColor = "blue";
  }
  if (!regex.test(event.target.value)) {
    cardName.innerText = event.target.value;
  }
});

//CARD NUMBER
cardNumber.addEventListener("input", (event) => {
  numValue = event.target.value;
  const regex = /[a-zA-Z]/gi;

  copyNum = numValue;
  cardNum.innerHTML = copyNum.replace(/\B(?=(\d{4})+(?!\d))/gi, " ");

  if (cardNumber.value.length == 16) {
    cardNumber.style.borderColor = "blue";
  }

  if (regex.test(event.target.value)) {
    wrong.innerText = "Wrong format, numbers only";
    cardNumber.style.borderColor = "red";
  } else {
    wrong.innerText = "";
  }
});

//MM
dateNumber.addEventListener("input", (event) => {
  dateValue = event.target.value;
  const regex = /[a-zA-Z]/gi;
  event.target.value = event.target.value.replace(regex, "");
  mmNum = dateValue;

  mmYy.innerText = "";
  if (dateNumber.value.length == 2) {
    dateNumber.style.borderColor = "blue";
  }

  if (!regex.test(event.target.value)) {
    mmNumber.innerText = event.target.value;
  }
});
// YY
yearDate.addEventListener("input", (event) => {
  yyValue = event.target.value;
  const regex = /[a-zA-Z]/gi;
  event.target.value = event.target.value.replace(regex, "");
  yyNum = yyValue;
  if (yearDate.value.length == 2) {
    yearDate.style.borderColor = "blue";
  }
  yyMm.innerText = "";
  if (!regex.test(event.target.value)) {
    yyNumber.innerText = event.target.value;
  }
});

/// CVC
cvcInput.addEventListener("input", (event) => {
  cvcValue = event.target.value;
  const regex = /[a-zA-Z]/gi;
  event.target.value = event.target.value.replace(regex, "");
  cvcNum = cvcValue;
  if (cvcInput.value.length == 3) {
    cvcInput.style.borderColor = "blue";
  }

  if (!regex.test(event.target.value)) {
    cvcNumber.innerText = event.target.value;
  }
  cvc.innerText = "";
});

btn.addEventListener("click", () => {
  if (cardNumber.value.length < 16) {
    wrong.innerText = "Wrong format!";
    cardNumber.style.borderColor = "red";
  }
  if (dateNumber.value.length < 2) {
    mmYy.innerText = "Can’t be blank";
    dateNumber.style.borderColor = "red";
  }
  if (yearDate.value.length < 2) {
    yyMm.innerText = "Can’t be blank";
    yearDate.style.borderColor = "red";
  }
  if (cvcInput.value.length < 3) {
    cvc.innerText = "Can’t be blank";
    cvcInput.style.borderColor = "red";
  }
  if (cardHolder.value == "") {
    cardHolder.style.borderColor = "red";
  }
  if (
    (cardHolder.value.length + "") &
    (cardNumber.value.length == 16) &
    (dateNumber.value.length == 2) &
    (yearDate.value.length == 2) &
    (cvcInput.value.length == 3)
  ) {
    your.style.display = "block";
    yourText.style.display = "none";
  }
});
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
console.log(countDownDate);
