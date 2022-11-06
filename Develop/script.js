// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789";
  var chars = "!@#$%^&*()";
  var charType = "";
  var password = "";  
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt('How many characters would you like your password to contain?');
if (passwordLength > 128 ) {
   alert ('You must pick a number that is less than 128!');
} else if (passwordLength < 8) {
  alert ('Your password must be greater than 8 characters!');
} else {
if (confirm('Do you want to use uppercase letters?')) { 
    charType = charType + upper;
 } 
if (confirm('Would you like to have a number or numbers in your password?')) {
   charType = charType + num;
 }
if (confirm('Do you want lowercase letters?')) {
  charType = charType + lower;
 }
if (confirm('Do you want any special characters?')) {
  charType = charType + chars;
 } 
if (charType.length >= 1) {
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * charType.length);
    password += charType[randomNumber];
   } 
  } else {
    console.log ('You must select at least one character type');
   }
  }
  passwordText.value = password;
}

function copyPass () {
  var copyBtn = document.getElementById("password");
  copyBtn.select("password");
  navigator.clipboard.writeText(copyBtn.value);
  alert("Copied the text: " + copyBtn.value);
}

copyPass();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
