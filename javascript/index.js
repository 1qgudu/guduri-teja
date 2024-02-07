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

var cricket = ["raju1","rahul3","rahul4","rahul4","rahul5","rahul6","rahul7","rahul8","rahul9","rahul10","rahul11"];
cricket.shift();
let x = cricket.length;
cricket.push("rahul12");
cricket.sort();
alert (cricket);
var cricket1 = ["raju01","rahul03","rahul04","rahul04","rahul05","rahul06","rahul07","rahul08","rahul09","rahul510","rahul011"];
var jersey = [1,2,3,4,5,6,7,8,9,10,11];
let u=[];
for(let i=0;i<=11;i++){
        u.push([cricket1[i],jersey[i]]);
    }
console.log(u);