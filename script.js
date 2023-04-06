// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordlength= 8;
var storedvalues = [];
var lowercaseletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var uppercaseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialcharacters = ["!","@","#","$","^","%","&","*","(",")","{","}","[","]","=","<",">","/","?",",",".",];



//creating function called generate password

function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordlength; i++) {
    var Random = Math.floor(Math.random() * storedvalues.length);
    password = password + storedvalues[Random];

  }
  return password;

}
//Generating prompts
function generateprompts() {

  storedvalues = [];
  passwordlength = prompt("How many characters woulld you like your password to be between 8-128 characters");
  
  if(isNaN(passwordlength) || passwordlength < 8 || passwordlength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return false;
  }

  if(confirm("Would you like lowercase letters in your password?")) {
    storedvalues = storedvalues.concat(lowercaseletters);
  }

  if(confirm("Would you like uppercase letters in your password?")) {
    storedvalues = storedvalues.concat(uppercaseletters);
  }

  if(confirm("Would you like numbers in your password?")) {
    storedvalues = storedvalues.concat(numbers);
  }

  if(confirm("Would you like special character letters in your password?")) {
    storedvalues = storedvalues.concat(specialcharacters);
  }
  return true;
}

// Write password to the #password input
function writePassword() {
  var trueorfalse = generateprompts();

  if(trueorfalse) {
  
  var password = generatePassword();
  // need to define generatePassword
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
