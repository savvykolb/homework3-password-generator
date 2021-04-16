// 1. I will need to click the button to display prompts.
// 2. I need to be able to pick between 2 choices on prompts.
// 3. I need to be able to pick the length of my password. 8-128
// 4. THEN I choose lowercase, uppercase, numeric, and/or special characters
// I need a way to store all these characters 
// Start building password 
// I will probably need to randomly choose from wach variable some characters to build a String 
// if a user chooses 8 characters, take 2 charaacters from each character set if they chose all 
// I will need Math.random to look into my variables to store all the characheters and randomluy choose one
// need a variable that will be the final password and I slowily keep adding to it. 
// May need a way to shuffle the characters so they are not 11aa&& 
// 5. Once prompts are all answered my password needs to be displayed on the page.

// Assignment Code
var generateBtn = document.querySelector("#generate");

// I am honestly not sure why I am using const instead of let or var. I just read to use const 
const upperCase = [ 

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
    'Z',
];

const lowerCase = [
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
    'z',
  ];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')','{', '}', '<', '>', '/', '.']; 
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ABOVE WAS ALL GIVEN 

// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol,
// }


// // This variable states that it will go into the window/document/html and find the id generateButton. 
// var generateButton = document.querySelector('#generate');

// // This function used this inbedded CharCode that assigns numbers to values and characters. Math.random gives random decimals. math.floor rounds the number. multiply by 26 because of 26 letters in alphabet. 97 starts lowercase A. http://www.net-comber.com/charset.html

// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// // Here we have a function with a var within the function scope. We had to add the symbols we want to use. Then we want to 'return' (spit out or give you) a random symbol. We used math floor and math random like above. This time though we used symbols.length - Length just means it takes the entire length of the variable attached. So in this case all 17 symbols. 

// function getRandomSymbol() {
//     const symbols = '!@#$%^&*(){}<>/,.';
//     return symbols[Math.floor(Math.random() * symbols.length)];
// }

// console.log('getRandomLower:', getRandomLower())
// console.log('getRandomUpper:', getRandomUpper())
// console.log('getRandomNumber:', getRandomNumber())
// console.log('getRandomSymbol:', getRandomSymbol())