import{calculate} from "./calculator";

// TODO: Faire la manipulation du DOM dans ce fichier
// ttt
let inputElement = document.getElementById("input"); 
let userInput= inputElement.value;
console.log(userInput);
let label = document.getElementById("calcul");
document.addEventListener("keyup", function(event) {
    let key = event.key;
    if (key.match(/[+\-*/0-9]/)) {
        label.textContent += ` ${key} `;
    }
  });
  let operatorButton = document.querySelector(".operator");
let numberButton = document.querySelector(".number");
operatorButton.addEventListener("click", function() {
    let label = document.getElementById("label"); 
  
    if (label.textContent === "") {
      label.textContent += numberButton.value; 
    } else {
      label.textContent += " " + numberButton.value; 
    }
  });
  let equalsButton = document.getElementById("equals-button");
let percentageButton = document.getElementById("percentage-button");

equalsButton.addEventListener("click", function() {
    calculateResult();
});
percentageButton.addEventListener("click", function() {
    calculatePercentage();
});
let calculationText = document.getElementById("calculation-text");
let inputNumber = document.getElementById("input-number");
let calculateButton = document.getElementById("calculate-button");
calculateButton.onclick = function() {
    let userInput = Number(inputNumber.value);
    let result = userInput * 23;
    calculationText.textContent = `23 x ${userInput} equals ${result}`;
};

window.addEventListener('DOMContentLoaded', updateCalculText);
let numericButtons = document.querySelectorAll(".numeric-Button");
let inputValue = "";
numericButtons.forEach(button => {
    button.addEventListener("click", () => {
        let number = button.textContent;
        inputValue += number;
        inputField.value = inputValue;
    })
})
//buttons.forEach(button => {
    //button.addEventListener('click', () => {
      //const buttonText = button.textContent;
      //switch (button.id) {
        //case 'reset':
            //console.log('AC Button was clicked');
            //break;
        
      //case 'clear':
        //console.log('C Button was clicked');
        //break;
        //case 'percentage':
            //console.log('% Button was clicked');
        // break;
         //case 'divideby':
            //console.log('/ Button was Clicked');
            //default:
       //if (button.classList.contains('digit')) {
        //console.log(`Digit ${buttonText} Button was clicked`);
    //} else if (button.classList.contains('dot')) {
        //console.log(`Dot . Button was clicked`);
    //}
    
    //break;
//}
//});
//});
