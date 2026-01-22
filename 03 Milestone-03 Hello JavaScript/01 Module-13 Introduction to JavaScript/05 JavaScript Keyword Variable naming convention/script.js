//==> 1. No keyword in variable name
/*
var false = 45;
var var = 50;
*/

//==> 2. No space or gap in variable name
/*
var is happy = false;
var isHappy = true;
*/

//==> 3. No Quote
/*
var "address" = "Chittagong";
*/

//==> 4. Cannot start with a number. but other than the first letter is allowed
/*
var money = 45; //true
var money = 55; //true
var 3money = 46; //false
*/

//==> 5. Name is case sensitive
/*
address Address ADDRESS addRess ADDress
*/

//==> 6. How to write a long variable name
/*
var my current home address = "Chengdu Sichuan"; //false
var mycurrenthomeaddress = "Chengdu Sichuan"; //true but not meaningful
var my_current_home_address = "Chengdu Sichuan"; //snake case
var myCurrentHomeAddress = "Chengdu Sichuan"; //camel case
var MyCurrentHomeAddress = "Chengdu Sichuan"; //Pascal case
*/
