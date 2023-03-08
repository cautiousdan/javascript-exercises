const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	let newSum = 0;
  a.forEach (x => {
    newSum += x;
  })
  return newSum;
};

const multiply = function(a) {
  let newProduct = 1; 
  a.forEach (x => {
    newProduct = newProduct * x;
  })
  return newProduct;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let result = a;
	if (a === 0 || a === 1)
    return 1;
  while (a > 1) {
    a--;
    result *= a;
  }
  return result
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
