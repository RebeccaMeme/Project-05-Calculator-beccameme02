import{calculate} from "./calculator";

// TODO: Faire la manipulation du DOM dans ce fichier
// ttt
let lowerInput = document.getElementById("input");
let currentNumber = lowerInput.value;

console.log(currentNumber); 
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
function calculate() {
  let inputValue = document.getElementById("input").value;
  let numberValue = parseInt(inputValue);
  let result = numberValue *2;
   console.log("Le résultat est : " + result);
}
let userInput = document.getElementById("user-Input");
document.addEventListener("keydown", function(event) {
    let key = event.key;
   if (/^[0-9]$/.test(key)) {
      let number = parseInt(key);
      userInput.value += number;
    };
});
function checkString(str) {
  let regex = /^\d+\.\d+$/;
if (regex.test(str)) {
    console.log("La chaîne respecte les conditions requises.");
  } else {
    console.log("La chaîne ne respecte pas les conditions requises.");
  }
}
function evaluateExpression() {
  let input = document.getElementById("input").value;

  // Vérifier si l'entrée commence par un zéro suivi d'autres chiffres
  if (/^0[0-9]/.test(input)) {
    console.log("Valeur d'entrée invalide !");
    return;
  }
  let result = eval(input);
  document.getElementById("output").innerHTML = "Résultat : " + result;
}
document.getElementById("calculate-button");
document.addEventListener("click", evaluateExpression);
let plusButton = document.getElementById("plus-button");
let minusButton = document.getElementById("minus-button");
plusButton.addEventListener("click", function() {
  currentNumber = -currentNumber;
  updateDisplay(currentNumber);
});
minusButton.addEventListener("click", function() {
  currentNumber = -currentNumber;
  updateDisplay(currentNumber);
});
percentageButton.onclick = function() {
  let resultElement = document.getElementById("result");
  let resultValue = parseFloat(resultElement.value);
  // Calculer le pourcentage en divisant par 100
  let percentageResult = resultValue / 100;
  resultElement.value = percentageResult;
};
let currentInput = "";
let previousResult = 0;
function AC() {
  currentInput = "";
  previousResult = 0;
}
function C() {
  currentInput = "";
}
document.getElementById("reset-button").addEventListener("click", AC);
document.getElementById("clear-button").addEventListener("click", C);
function calculate() {
  let inputEquals = document.getElementById("equals");
  // Lire la valeur actuelle du champ de saisie
  let inputValue = inputEquals.value;
  let result = eval(inputValue);
  // Ajouter le signe égal (=) à la chaîne d'entrée et afficher le résultat dans le champ de saisie
  inputEquals.value = inputValue + " = " + result;
}

        
