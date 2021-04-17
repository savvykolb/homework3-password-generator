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
var length;
var charArray = [];

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

// I need some variables. 
// I need to generate the password.

function generatePassword() {
    length = 0;
    charArray = [];
   var passwordLength = prompt("Enter length of desired password between 8-128 characters.");
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

    var randomChar = [];

    
    for (let i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * charArray.length);
        console.log('index:', index);
        console.log(charArray[index]); 

        randomChar.push(charArray[index]);
        console.log('randomChar:', randomChar)

    
    }

    randomChar.join('');
    console.log(randomChar.join(''))


return randomChar.join('');

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


