// Global Variables 
var generateBtn = document.querySelector("#generate");
var length;
var charArray = [];

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

// This function is used to generate the password. All steps taken to generate password are found in this function. 

function generatePassword() {
    // These reset the function to clear storage from global variables 
    length = 0;
    charArray = [];

    // This is our first prompt to trigger the line of prompts. This one is the only one that needed a else statement. This is because the rest of the prompts are T/F statements. 
   var passwordLength = prompt("Enter length of desired password. Value must be between 8-128 characters.");
    console.log('passwordLength:', passwordLength)
   
    if (passwordLength > 8 && passwordLength < 129) { 
        length = parseInt(passwordLength);
        console.log('length:', length)
       
        var hasUppercase =  confirm("Would you like uppercase letters in your password?");
        console.log('hasUppercase:', hasUppercase)

        var hasLowercase = confirm("Would you like lowercase letters in your password?");
        console.log('hasLowercase:', hasLowercase)

        var hasNumbers = confirm("Would you like numbers in your password?");
        console.log('hasNumbers:', hasNumbers)

        var hasSpecialCharacters = confirm("Would you like special characters in your password?");
        console.log('hasSpecialCharacters:', hasSpecialCharacters)
    }
    else {
        alert("Please enter a valid length.");
        generatePassword ();
         
    }

// This is where we take the function answers from above and store them in charArray. Concat basically takes 2 arrays and combines them into onemptied. Otherwise it created objects. 

    if (hasUppercase){
        charArray = charArray.concat(upperCase);
        console.log('charArray:', charArray)
    } 
  
    if (hasLowercase){
        charArray = charArray.concat(lowerCase);
        console.log('charArray:', charArray)
    } 

    if (hasNumbers){
        charArray = charArray.concat(numbers);
        console.log('charArray:', charArray)
    } 

    if (hasSpecialCharacters){
        charArray = charArray.concat(specialCharacters);
        console.log('charArray:', charArray)
    } 

// This is the equation that takes all the compliled characters in charArray from answered prompts and radomizes it we then 'pushed' charArrays length index into the new variable randomChar   

    var randomChar = [];
 
    for (let i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * charArray.length);
        console.log('index:', index);
        console.log(charArray[index]); 

        randomChar.push(charArray[index]);
        console.log('randomChar:', randomChar)

    
    }

// Then we have to return the output to have it 'written' later You cannot call it because then it wont provide what it 'written' to the html or 'blank' space in generatePassword below. I also had to add the 'join' to get rid of commas within the string.     

return randomChar.join('');

}

// This is what was provided. It calls the generate function above to 'write' it on the page. 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This was provided as WEBGL_lose_context. It is the event listener that starts this java when button is pushed. 

generateBtn.addEventListener("click", writePassword);


