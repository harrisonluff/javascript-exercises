const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce(((total, current) => total += current), 0);
};

const multiply = function(arr) {
  // Assumes non-empty array
  return arr.reduce(((total, current) => total *= current), 1);
};

const power = function(a, b) {
	out = 1;
  for (let i=0; i<b; i++) {
    out *= a;
  }
  return out;
};

const factorial = function(a) {
	out = 1;
  for (let i=1; i<=a; i++) {
    out *= i;
  }
  return out
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
