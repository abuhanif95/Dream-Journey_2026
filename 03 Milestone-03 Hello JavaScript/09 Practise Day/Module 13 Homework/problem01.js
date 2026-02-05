/*
==> Problem: 01
    You went to the supermarket to buy some oranges and apples.
    calculate how much money the shopkeeper will return.

    Input:
    The first line of the input is the taka you have.
    he second line is the cost of 1 kg og oranges and 1 kg of apples.

    Output:
    Print the result.
*/

var takaIHave = 1000;
var orangePerKg = 200;
var applePerKg = 150;

var totalCost = orangePerKg + applePerKg;
var takaReturn = takaIHave - totalCost;

console.log("Return taka: ", takaReturn);
