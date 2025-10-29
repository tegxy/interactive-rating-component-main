const rates = document.querySelectorAll(".button");

rates.forEach((rate) => {
  rate.onclick = function () {
    rates.forEach((otherRate) => {
      if (otherRate !== rate) {
        otherRate.classList.remove("clicked");
      }
    });
    rate.classList.toggle("clicked");
  };
});
