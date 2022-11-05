// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789";
  var chars = "!@#$%^&*()";
  var charType = "";
  var password = "";  
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt('How many characters would you like your password to contain?');
if (passwordLength > 128 ) {
   console.log ('You must pick a number that is less than 128!');
} else if (passwordLength < 8) {
  console.log ('Your password must be greater than 8 characters!');
} else {
  var hasUpper = confirm('Do you want to use uppercase letters?');
  var hasNum = confirm('Would you like to have a number or numbers in your password?');
  var hasLower = confirm('Do you want lowercase letters?');
  var hasSpecial = confirm('Do you want any special characters?');
  if (hasUpper) { 
    charType = charType + upper;
 } 
 if (hasNum) {
   charType = charType + num;
 }
 if (hasLower) {
  charType = charType + lower;
 }
 if (hasSpecial) {
  charType = charType + chars;
 } else {
  console.log ('You must select at least one character type');
 }
  if (charType.length >= 1) {
    generatePassword
  }
}





//  at least one char type
// 4) generate password
// 5) your password has beem generate and it is: _________________.
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
