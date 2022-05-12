// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

//Requirements selections

var uppercaseL = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character= ["+","=","-","_","@","#","$","%","^","&","*","(",")"];

uppercaseL [1]
//provide options
  var cnum = prompt ("Enter lenth of your password");
  var numbs = confirm ("select if you want to include numbers");
  var uppercases = confirm ("select if you want Uppercases");
  var lowercases = confirm ("select if you want lowercases");
  var characters = confirm ("Select if you want special characters");

  var pass = [];
var you = [];


// Array here 

if (uppercases){
  pass = pass.concat(uppercaseL);

}

if (lowercases){
  pass = pass.concat(lowercaseL);

}

if (characters){
  pass = pass.concat(character);
}
console.log(pass)


for (var i = 0; i < cnum; i++) {
      
  you.push (pass[Math.floor(Math.random() * pass.length)]); 
  }

  return you.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

