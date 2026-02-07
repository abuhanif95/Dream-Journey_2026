/*
==> Task 01:
    Write a JavaScript code to reverse the array colors without using the reverse method

    Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
    Output: ['orange', 'yellow', 'green', 'blue', 'red']
*/

const colors = ["red", "blue", "green", "yellow", "orange"];

let reverseColors = [];
for (const color of colors) {
  reverseColors.unshift(color);
}

console.log(reverseColors);


let reverse_colors=[];
for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    reverse_colors.unshift(color);
}

console.log(reverse_colors)
