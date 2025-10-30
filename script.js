const rates = document.querySelectorAll(".button");

rates.forEach((rate) => {
  rate.onclick = function () {
    rates.forEach((otherRate) => {
      if (otherRate !== rate) {
        otherRate.classList.remove("clicked");
      }
    });
    rate.classList.toggle("clicked");

    const selectedText = rate.textContent;

    const submit = document.querySelector(".submitButton");

    const updateText = document.querySelector(".text");

    console.log(updateText);
  };
});
