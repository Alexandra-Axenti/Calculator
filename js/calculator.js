

function Calculator() {}

Calculator.prototype.add = function (num1, num2) {
  return parseInt(num1) + parseInt(num2);
};

Calculator.prototype.multiply = function (num1, num2) {
  return parseInt(num1) * parseInt(num2);
};

Calculator.prototype.divide = function (num1, num2) {
  return parseInt(num1) / parseInt(num2);
};

Calculator.prototype.substract = function (num1, num2) {
  return parseInt(num1) - parseInt(num2);
};


exports.calculatorModule = Calculator;
