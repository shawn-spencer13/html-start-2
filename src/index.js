import "./styles.css";

// javscript below here
const page2Button = document.getElementById("page2Button");
const rangeInput = document.getElementById("rangeInput");

page2Button.addEventListener("click", () => {
  window.location.href = "/other.html";
});

rangeInput.addEventListener("change", e => {
  console.log(e.target.value);
});
