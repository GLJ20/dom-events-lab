/*-------------------------------- Variables --------------------------------*/
let fn = null;
let sn = null;
let operator = null;
let isNewNum = false;

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll(".button");
const nums = document.querySelectorAll(".number");
const operations = document.querySelectorAll("[data-op]");
const display = document.querySelector(".display");

const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector("[data-clear]");  

display.innerText = 0;

/*-------------------------------- Functions --------------------------------*/
const handleOperatorClick = (event) => {
  fn = parseInt(display.innerText);  
  operator = event.target.getAttribute("data-op");  
  display.innerText = 0;  
};

const handleEqualBtnClick = () => {
  sn = parseInt(display.innerText); 
  handleCalculation();
};

const handleCalculation = () => {
  let total;
  if (operator === "+") {
      total = fn + sn;
  }
  if (operator === "-") {
      total = fn - sn;
  }
  if (operator === "*") {
      total = fn * sn;
  }
  if (operator === "/") {
      if (sn !== 0) {
          total = fn / sn;
      } else {
          display.innerText = "Error";
      }
  }
  display.innerText = total; 
  isNewNum = true;
};

const clear = () => {
  display.innerText = 0;
  fn = null;
  sn = null;
  operator = null;
};

/*----------------------------- Event Listeners -----------------------------*/
equalsButton.addEventListener('click', handleEqualBtnClick);
clearButton.addEventListener('click', clear);  

nums.forEach((num) => {
    num.addEventListener('click', (event) => {
        if(isNewNum){
          display.innerText = event.target.innerText;  // Replace with new number
          isNewNum = false;  // Reset
        }else{
          if (display.innerText === "0") {
            display.innerText = event.target.innerText;  
        } else {
            display.innerText += event.target.innerText;  
        }
        }
        
    });
});

operations.forEach((operation) => {
    operation.addEventListener('click', handleOperatorClick);
});
