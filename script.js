const rates = document.querySelectorAll(".button");
const submit = document.querySelector(".submitButton");
const main1 = document.querySelector(".main1");
const main2 = document.querySelector(".main2");
let updateText = document.querySelector(".text");
let selectedText = null;

// this line here uses the forEach loop to loop through all the rate buttons. rate is a parameter that represents each button in the loop
rates.forEach((rate) => {
  rate.onclick = function () {
    // this line here uses another forEach loop to loop through all the rate buttons again to remove the clicked class from all other buttons except the one that was clicked
    rates.forEach((otherRate) => {
      // this condition checks if the otherRate is not the same as the rate that was clicked. otherRate is another parameter that represents each button(not clicked) in the inner loop
      if (otherRate !== rate) {
        // this line removes the clicked class from the otherRate button
        otherRate.classList.remove("clicked");
      }
    });
    // this line toggles toggles the clicked class on the rate button that was clicked. it adds the class if it is not present and removes it if it is present
    rate.classList.toggle("clicked");

    // this line updates the selectedText variable with the text content of the rate button that was clicked
    selectedText = rate.textContent;
  };
});

// this line adds an onclick event listener to the submit button
submit.onclick = function () {
  // this condition checks if no rating was selected and displays an alert message if true
  if (!selectedText) {
    alert("Please select a rating!");
    return;
  }

  // this line hides the first main section and displays the second main section with the selected rating and updates the text content accordingly
  main1.style.display = "none";
  main2.style.display = "flex";
  updateText.textContent = "You selected " + selectedText + " out of 5";
};
