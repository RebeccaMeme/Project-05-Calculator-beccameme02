//import {calculate} from "./calculator";

// TODO: Faire la manipulation du DOM dans ce fichier
//ttt
let inputElement = document.getElementById("input");
let calculElement = document.getElementById("calcul");
let numericButtons = document.querySelectorAll(".numpad");
numericButtons.forEach((button)=> {
  // console.log(button.textContent);
  button.addEventListener("click",(e)=> {
  //  console.log(e.target.textContent);
  inputElement.value += e.target.textContent
  })
})
let equalsButton = document.getElementById("equals");
let percentageButton = document.getElementById("percentage");

// numericButtons.forEach(function(button){
//   button.addEventListener("click", function(){

//     let digit = this.textContent;
//     if (!(digit === "0" && input === "")){
//       input += digit;
//     }
//   });
// });
// let currentCalculation = "";
// function updateInput(value){
//   inputElement.value += value;
//   function updateCalculation(value){
//     currentCalculation += value;
//     calculElement.textContent = currentCalculation;
//   }
//   function calculate(){
//     result;
//     try{
//       result = eval(currentCalculation);
//       inputElement.value = result;
//       currentCalculation = "";
//       calculElement.textContent = "";
//     } catch (error) {
//       // Gestion des erreurs lors du calcul
//       console.error(error);
//     }
//  }
// }
// let input = "";

// let plusMinusButton = document.getElementById("plus-Minus-Button");
// plusMinusButton.addEventListener("click", function(){
//   if (input !== ""){
//     if(input[0] === "-"){
//       input = input.slice(1);
//     } else{
//       input = "-" + input;
//     }
//   }
// })



        
