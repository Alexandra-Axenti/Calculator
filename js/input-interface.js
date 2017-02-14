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
