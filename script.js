// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatepassword() {

//Requirements Selections

var uppercaseL = ["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character =["+","=","-","_","@","#","$","%","^","&","*","(",")"];
uppercaseL [1]
//provide options
var cnum = prompt ("Choose lenth of your password");
var numbs = confirm ("click ok if you want to include numbers");
var uppercases = confirm ("click ok you want uppercases");
var lowercases = confirm ("click ok if you want lowercases");
var characters = confirm ("click ok you want characters");

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
