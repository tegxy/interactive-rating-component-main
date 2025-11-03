const rates = document.querySelectorAll(".button");
const submit = document.querySelector(".submitButton");
const main1 = document.querySelector(".main1");
const main2 = document.querySelector(".main2");
let updateText = document.querySelector(".text");
let selectedText = null;

rates.forEach((rate) => {
  rate.onclick = function () {
    rates.forEach((otherRate) => {
      if (otherRate !== rate) {
        otherRate.classList.remove("clicked");
      }
    });
    rate.classList.toggle("clicked");

    selectedText = rate.textContent;
  };
});

submit.onclick = function () {
  if (!selectedText) {
    alert("Please select a rating!");
    return;
  }
  main1.style.display = "none";
  main2.style.display = "flex";
  updateText.textContent = "You selected " + selectedText + " out of 5";
};
