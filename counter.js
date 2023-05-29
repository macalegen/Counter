// Variables
let substract = document.querySelector('#substract');
let add = document.querySelector('#add');

console.log(substract)

substract.addEventListener("click", function () {
// Substract value (-1)
let output = document.querySelector('#result');
let result = Number(output.innerHTML) - 1;
if (result >= 0) {
  output.innerHTML = result;
}
console.log(output);
});

add.addEventListener("click", function () {
  // Add value (+1)
  let output = document.querySelector('#result');
  let result = Number(output.innerHTML) + 1;

  output.innerHTML = result;
  console.log(output);
});



/*var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function reductionClick() {
    updateDisplay(--counterVal);
}

function updateDisplay(val) {
    document.getElementById("result").innerHTML = val;
}*/
