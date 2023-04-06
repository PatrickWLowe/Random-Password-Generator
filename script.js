// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordlength= 8;
var storedvalues = [];
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialcharacters = "`~!@#$%^&*()_-+=[]{}/?,./'|";



//creating function called generate password

function generatePassword() {

}

function generateprompts() {
  passwordlength = prompt("How many characters woulld you like your password to be between 8-128 characters");
  
  if(isNaN(passwordlength) || passwordlength < 8 || passwordlength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return false;
  }

  if(confirm("Would you like lowercase letters in your passsword?")) {
    storedvalues = storedvalues.concat(lowercaseletters);
  }

  if(confirm("Would you like uppercase letters in your passsword?")) {
    storedvalues = storedvalues.concat(uppercaseletters);
  }

  if(confirm("Would you like numbers in your passsword?")) {
    storedvalues = storedvalues.concat(numbers);
  }

  if(confirm("Would you like special character letters in your passsword?")) {
    storedvalues = storedvalues.concat(specialcharacters);
  }
  return true;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // need to define generatePassword
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
