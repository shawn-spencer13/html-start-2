import "./styles.css";
// javscript below here

const dateinput = document.getElementById("dateinput");
const page2Button = document.getElementById("page2Button");
const rangeInput = document.getElementById("rangeInput");
const colorinput = document.getElementById("color");
const firstNumber = document.getElementById("firstNumber");
const calcButton = document.getElementById("calc");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button0 = document.getElementById("button0");

button2.addEventListener("click", event => { 
  firstNumber.value = firstNumber.value + event.target.value;
});
button3.addEventListener("click", event => { 
  firstNumber.value = firstNumber.value + event.target.value;
});
button4.addEventListener("click", event => { 
  firstNumber.value = firstNumber.value + event.target.value;
});
button5.addEventListener("click", event => { 
  firstNumber.value = firstNumber.value + event.target.value;
});
button6.addEventListener("click", event => { 
  firstNumber.value = firstNumber.value + event.target.value;
});
button7.addEventListener("click", event => { 
  firstNumber.value = firstNumber.value + event.target.value;
});
button8.addEventListener("click", event => { 
  firstNumber.value = firstNumber.value + event.target.value;
});
button9.addEventListener("click", event => { 
  firstNumber.value = firstNumber.value + event.target.value;
});
button0.addEventListener("click", event => { 
  firstNumber.value = firstNumber.value + event.target.value;
});


calcButton.addEventListener("click", () => {
  // const total = document.getElementById("total");
  // const sum = Number(firstNumber.value) + Number(secondNumber.value);


  // total.innerHTML = sum;
});

button1.addEventListener("click", event => { 
  firstNumber.value = firstNumber.value + event.target.value;
});

dateinput.addEventListener("change", event => {
  dateoutput.innerHTML = event.target.value;
});
colorinput.addEventListener("input", event => {});

page2Button.addEventListener("click", event => {
  window.location.href = "/calculator.html";
});

rangeInput.addEventListener("input", event => {
  // console.log(e.target.value);
  const rangevalue = document.getElementById("rangevalue");

  rangevalue.innerHTML = event.target.value;
});
