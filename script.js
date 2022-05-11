// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
console.log(Math.floor(Math.random()*28));
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
