const password=document.querySelector("#password");
const length = 12;
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+?><,./~`|}{[]:;'\"\\-=";
const allCh=upperCaseLetters+lowerCaseLetters+symbols+numbers;
function generate(){
    
    let generatedPassword = "";
    generatedPassword += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    generatedPassword += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];
    generatedPassword += symbols[Math.floor(Math.random() * symbols.length)];
   
    while(length>generatedPassword.length){
        generatedPassword+=allCh[Math.floor(Math.random()*allCh.length)]
    }
   password.value=generatedPassword;
 
}
 
function copypass(){
    password.select();
     document.execCommand("copy")
}