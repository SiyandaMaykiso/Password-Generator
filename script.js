// Variable Commands
var generateBtn = document.querySelector("#generate");
var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// Below is the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Save Passoword Function

  function copy2Clip() {
    inputBoxEl.select();
    document.execCommand("Save");
    alert("Successfully saved to Desktop!");

  passwordText.value = password;

// Below when the user clicks on the password field, this message box will show
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";


// Listener Buttons
generateBtn.addEventListener("click", writePassword);


  // When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";


// When the user starts to type something inside the password field
myInput.onkeyup = function()


}
