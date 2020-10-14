
const alphaLower ="abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const numerical = "012345689";
let passwordGenerated = ''; 


document.getElementById("gen").addEventListener("click", function(){ 
    genPassword(); 
    document.getElementById("password").innerHTML = passwordGenerated;
});

function copyPassword(){
    let copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    alert("Password copied to your desktop."); 
}; 

function genPassword() {
    
    let passwordOptions ='';
    let passwordCheck= []; 
    
//user selection on length
    alert("Welcome to the Next-Gen Password Generator!")
    let numberChar = prompt("How many characters would you like in your password? It must be between 8 and 128.");
    


    while (numberChar < 8 || numberChar > 128 || isNaN(numberChar)) {
        alert("You must enter a number between 8 and 128");
        numberChar = prompt("How many characters would you like in your password? It must be between 8 and 128.");
      

    }


// user selection

    let useSpecial = false; 
    let useNumerical = false; 
    let useLower = false; 
    let useUpper = false; 

    while (!useSpecial && !useNumerical && !useLower && !useUpper) {
        alert("You need to select at least one character type for your password from the options following this prompt.");
        useSpecial = confirm("Would you like to have special characters in your password?"); 
        useNumerical = confirm("Would you like to have numerical characters in your password?"); 
        useLower = confirm("Would you like to have lowercase letters in your password?"); 
        useUpper = confirm("Would you like to have uppercase letters in your password?"); 

    }
      

//generate list of characters to use in password based on user selection

    function addCharSelect(useChar,type) {
        if (useChar) {
            passwordOptions = passwordOptions + type;
            passwordCheck.push(type); 
        }; 
    }

    addCharSelect(useSpecial, special);
    addCharSelect(useNumerical, numerical); 
    addCharSelect(useLower, alphaLower);
    addCharSelect(useUpper, alphaUpper); 

     if (useSpecial) {
     passwordOptions = passwordOptions + special;
    passwordCheck.push(special); 
    }; 
    if (useNumerical) {
    passwordOptions = passwordOptions + numerical;
    passwordCheck.push(numerical); 
    }; 
    if (useLower) {
    passwordOptions = passwordOptions + alphaLower;
    passwordCheck.push(alphaLower); 
    }; 
    if (useUpper) {
    passwordOptions = passwordOptions + alphaUpper;
    passwordCheck.push(alphaUpper); 
    }; 



// Creates random numbers


    function randomNum() {
        return Math.floor(Math.random()*(passwordOptions.length)); 
    }

    // Creates string

//Generates password based on characters 
    function generateNewPassword(){ 
        passwordGenerated = '';
        for (i=0; i < numberChar; i++) {
            passwordGenerated= passwordGenerated + passwordOptions[randomNum()];
        }
        console.log("Generated password is " + passwordGenerated);
    }



    generateNewPassword(); 
     

   
    
    function checkGeneratedPassword (){ 
        let countCharCheck = 0; 
        let totalCountCharCheck =[]; 

        function checkNamedChar(useChar, type) {
            if(useChar) {
                countCharCheck = 0;
                for (i=0; i < passwordGenerated.length; i++) {
                    if (type.indexOf(passwordGenerated[i]) !== -1) {
                        countCharCheck++; 
                    }
                }
                totalCountCharCheck.push(countCharCheck);  
            }
        }
    
        checkNamedChar(useSpecial, special);
        checkNamedChar(useNumerical, numerical);
        checkNamedChar(useLower, alphaLower);
        checkNamedChar(useUpper, alphaUpper); 

        console.log(totalCountCharCheck); 

        while (totalCountCharCheck.indexOf(0) !== -1) {
            totalCountCharCheck =[];
            generateNewPassword(); 
            checkGeneratedPassword(); 
        }
    }

    checkGeneratedPassword(); 

}