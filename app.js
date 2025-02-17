/*-------------------------------- Variables --------------------------------*/
let fn = null;
let sn = null;
let operator = null;
let isNewNum = false;
let lastClickedWasOperator = false

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
  if(lastClickedWasOperator){
    return;
  }
  fn = parseInt(display.innerText);  
  operator = event.target.getAttribute("data-op");  
  display.innerText = 0;  

  lastClickedWasOperator = true;
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
  isNewNum = true;//after finishing the calculation make it true to then be able to click a new num instead of the num appending to the result
  
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
      lastClickedWasOperator = false;
        if(isNewNum){//after a num is clicked, if isNewnum is true it means that we want to do a new calculation
          display.innerText = event.target.innerText;//make the clicked num the display 
          isNewNum = false; //set it to false to allow appending to the current num
        }else{
          if (display.innerText === "0") {
            display.innerText = event.target.innerText; //this is to assign the new num clicked
        } else {
            display.innerText += event.target.innerText;  //this is to append the num clicked so for the second num
        }
        }
        
    });
});

operations.forEach((operation) => {
    operation.addEventListener('click', handleOperatorClick);
});
