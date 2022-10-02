// Assignment code here
function generatePassword() {
    var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numberInputs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var possibleCharacters = [];
  
    numberOfCharacters = prompt("How many characters would you like your password to be? (Must be between 8-128 characters).");
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      return "Please choose a valid number of characters.";
    } else if (isNaN(numberOfCharacters)) {
      numberOfCharacters = prompt("Please enter a valid number.");
    }
    else {
      alert("Your password will be " + numberOfCharacters + " characters long.");
      
    }
  
    hasLowercase = confirm("Would you like your password to have lowercase letters?");
    if (hasLowercase) {
      var turnToLowercase = alert("Your password will have lowercase letters.");
    }
    else {
      alert("Your password will not have lowercase characters.");
    }
  
    hasUppercase = confirm("Would you like your password to have uppercase letters?");
    if (hasUppercase) {
      alert("Your password will have uppercase letters.");
    }
    else {
      alert("Your password will not have uppercase letters.");
    }
  
    hasNumbers = confirm("Would you like your password to have numbers?");
    if (hasNumbers) {
      alert("Your password will have numbers.");
    }
    else {
      alert("Your password will not have numbers.");
    }
  
    hasSpecial = confirm("Would you like your password to have special characters?");
    if (hasSpecial) {
      alert("Your password will have special characters.");
    }
    else {
      alert("Your password will not have special characters.");
    }
  
    if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
      return "Don't be difficult, select character type";
    };
  
    // group selected characters
    if (hasLowercase) {
      possibleCharacters = possibleCharacters.concat(lowercaseLetters);
    }
    if (hasUppercase) {
      possibleCharacters = possibleCharacters.concat(uppercaseLetters);
    }
    if (hasNumbers) {
      possibleCharacters = possibleCharacters.concat(numberInputs);
    }
    if (hasSpecial) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    }
  
    // pick random cards out of new pool for length of password
    let finalPassword = ""
    for (let i = 0; i < numberOfCharacters; i++) {
      let rng =[Math.floor(Math.random() * possibleCharacters.length)];
      // or finalPassword += possibleCharacters[rng];
      finalPassword = finalPassword + possibleCharacters[rng];
    }
    return finalPassword;
  };
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);