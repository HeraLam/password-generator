// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var options = false;
  do {
    var length = prompt("How mamny characters would you like your password to contain? At least 10 characters but no more than 64.");
    var Special = confirm("Click OK to confirm including Special characters.");
    var Numeric = confirm("Click OK to confirm including Numeric characters.");
    var LowerCase = confirm("Click OK to confirm including Lowercase letters.");
    var UpperCase = confirm("Click OK to confirm including Uppercase letters.");
    var responses = {
      length: length,
      Numeric: Numeric,
      LowerCase: LowerCase,
      UpperCase: UpperCase,
      Special: Special
    }
    if(length < 10)
    alert("Number must large than 9.");
    else if(length > 64)
    alert("Number must less than 65.");
    else if((!Numeric)&&(!LowerCase)&&(!UpperCase)&&(!Special))
    alert("Must choose at least one type.");
    else
    options = true;
  } while(!options);
  return responses;
}

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var passwordCombo = [];
  var final = "";
  if (passwordOptions.Numeric) {
    for (var i of numericCharacters)
    passwordCombo.push(i);
  }
  if (passwordOptions.LowerCase) {
    for (var i of lowerCasedCharacters)
    passwordCombo.push(i);
  }
  if (passwordOptions.UpperCase) {
    for (var i of upperCasedCharacters)
    passwordCombo.push(i);
  }
  if (passwordOptions.Special) {
    for (var i of specialCharacters)
    passwordCombo.push(i);
  }
  for (var i = 0; i < passwordOptions.length; i++) {
    final += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];
  }
  return final;
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);