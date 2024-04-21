let calender = document.querySelector(".calender");
let button = document.querySelector(".button");
let result = document.querySelector(".result");

button.addEventListener("click", function () {
  console.log();
  result.innerHTML = new persianDate(new Date(calender.value)).format(
    "YYYY/MM/DD"
  );
});
