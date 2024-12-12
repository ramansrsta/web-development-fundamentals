document.addEventListener("DOMContentLoaded", function () {
  const demo = document.querySelector("#demo");
  const demo2 = document.querySelectorAll(".demo2");
  const btn = document.querySelector("#clickMeButton");

  const header = document.getElementsByTagName("h1");
  const demo3 = document.getElementById("demo3");

  const dateTimeNow = new Date();
  const onlyTime = dateTimeNow.toLocaleTimeString();

  demo.innerHTML = `<h1>${onlyTime}</h1>`;

  function handleButtonClick() {
    demo.style.color = "red";
    demo.innerHTML = `<h1>${dateTimeNow}</h1>`;

    demo3.style.fontSize = "30px";

    demo2.forEach(function (element) {
      element.textContent = "blue";
    });

    header[0].style.color = "green";
  }

  btn.addEventListener("click", handleButtonClick);

  btn.removeEventListener("keydown", handleButtonClick);

  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Form submission prevented!");
    });
});
