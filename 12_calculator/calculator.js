const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let arraySum = 0;
  for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
  };
  return arraySum;
};

const multiply = function(arr) {
  return arr.reduce((prev, current) => prev * current, 1);
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
