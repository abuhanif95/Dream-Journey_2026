/**
==> Task 05:
    Capitalize Every first letter of each word in a String.
 */

    let str = "hello world from javascript";
    let capitalizedStr = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice((1))).join(" ");

    console.log(capitalizedStr);

    let result = "";
    let capitalizeNext = true;
    for(let i =0; i<str.length; i++){
        if(str[i] === " "){
            result += " ";
            capitalizeNext = true;
        } else if(capitalizeNext){
            result += str[i].toUpperCase();
            capitalizeNext = false;
        } else {
            result += str[i];
        }
    }

    console.log(result);