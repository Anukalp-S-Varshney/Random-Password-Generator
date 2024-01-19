
const passwordBox = document.getElementById("password");
const length = 14;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "~!@#$%^&*+";

const allChars = upperCase + lowerCase + number + symbols

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.randon() * upperCase.length)];
    password += lowerCase[Math.floor(Math.randon() * lowerCase.length)];
    password += number[Math.floor(Math.randon() * number.length)];
    password += symbols[Math.floor(Math.randon() * symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.randon() * allChars.length)];
    }
    passwordBox.value = password;
}
