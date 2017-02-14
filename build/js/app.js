(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


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

},{}],2:[function(require,module,exports){
var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(){
  var calculator = new Calculator ();
  $('.button').click(function(event){
    event.preventDefault();
    var num1 = $('#num1').val();
    var num2 = $('#num2').val();
    var output;

    if ($(".oper:checked").val() === "+") {
      output = calculator.add(num1,num2);
    } else if ($(".oper:checked").val() === "-") {
      output = calculator.substract(num1,num2);
    } else if ($(".oper:checked").val() === "*") {
      output = calculator.multiply(num1,num2);
    } else if ($(".oper:checked").val() === "/") {
      output = calculator.divide(num1,num2);
    }

        $(".result").val(output);

    });
  });

},{"./../js/calculator.js":1}]},{},[2]);
