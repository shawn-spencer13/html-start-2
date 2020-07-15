import "./styles.css";

// javscript below here
const page2Button = document.getElementById("page2Button");
const rangeInput = document.getElementById("rangeInput");
const colorinput = document.getElementById("color");

colorinput.addEventListener("input", e => {
  console.log(e.target.value);
  document.body.style.background = e.target.value;
});

page2Button.addEventListener("click", () => {
  window.location.href = "/other.html";
});

rangeInput.addEventListener("input", e => {
  // console.log(e.target.value);
  const rangevalue = document.getElementById("rangevalue");

  rangevalue.innerHTML = e.target.value;
});
