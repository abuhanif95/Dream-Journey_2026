/**
==> Problem: 02
    Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bengali of a student.
    
    Input:
    The first line of the input is the marks of the five subjects mentioned above, respectively.

    Output:
    Print the result in 2 decimal places.
*/

var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bengali = 99.50;

var totalMarks = mathematics + biology + chemistry + physics + bengali;
var averageMarks = totalMarks / 5;

console.log("Average marks: ", averageMarks.toFixed(2));