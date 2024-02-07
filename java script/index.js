const Calculator = {
  // Addition method
  add: function(num1, num2) {
    return num1 + num2;
  },

  // Subtraction method
  subtract: function(num1, num2) {
    return num1 - num2;
  },

  // Multiplication method
  multiply: function(num1, num2) {
    return num1 * num2;
  },

  // Division method
  divide: function(num1, num2) {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return num1 / num2;
  }
};

// Usage example
const resultAdd = Calculator.add(5, 3); // 8
const resultSubtract = Calculator.subtract(10, 4); // 6
const resultMultiply = Calculator.multiply(2, 6); // 12
const resultDivide = Calculator.divide(10, 2); // 5

console.log(resultAdd);
console.log(resultSubtract);
console.log(resultMultiply);
console.log(resultDivide);