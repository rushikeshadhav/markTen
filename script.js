const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

var notes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function () {
  hideErrorMessage();
  if (billAmount.value > 0) {
    // if (cashGiven.value >= billAmount.value) {
    const amountReturn = cashGiven.value - billAmount.value;
    calculate(amountReturn);
    // if (cashGiven.value < billAmount.value) {
    //   errorMsg("Cash given should be greater than bill amount");
    // }
  } else {
    errorMsg("Invalid amount");
  }
});

function calculate(amountReturn) {
  for (let i = 0; i < notes.length; i++) {
    const numberOfNotes = Math.trunc(amountReturn / notes[i]);
    amountReturn %= notes[i];
    noOfNotes[i].innerHTML = numberOfNotes;
  }
}

function hideErrorMessage() {
  message.style.display = "none";
}

function errorMsg(msg) {
  message.style.display = "block";
  message.innerHTML = msg;
}
