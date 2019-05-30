var num1 = parseInt(prompt("Enter first number here: "));
var num2 = parseInt(prompt("Enter the second number here: "));
var add = function(num1, num2){
return num1 + num2;
}
alert("The sum of " + num1 + " and " + num2 + " is " + add(num1, num2));
var subtract = function(num1, num2){
return num1 - num2;
}
alert("The difference between " + num1 + " and " + num2 + " is " + subtract(num1, num2));
var multiply = function(num1, num2){
return num1 * num2;
}
alert("The product of " + num1 + " and " + num2 + " is " + multiply(num1, num2));
var division = function(num1, num2){
return num1 / num2;
}
alert(num1 + " divided by " + num2 + " is " + division(num1, num2));
var remainder = function(num1, num2){
return num1 % num2;
}
alert("The remainder of dividing " + num1 + " and " + num2 + " is " + remainder(num1, num2));
