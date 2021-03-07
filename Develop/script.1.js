// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(l)
{
var criteriaArry = ["", "", "", ""];
criteriaArry[0] = prompt("Would you like to include uppercase letters? (Y/N)");
criteriaArry[1] = prompt("Would you like to include lowercase letters? (Y/N)");
criteriaArry[2] = prompt("Would you like to include numbers? (Y/N)");
criteriaArry[3] = prompt("would you like to include symbols? (Y/N)");
var charArry = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!@#$%^&*?"];
var text = "";
for (var i = 0; i < criteriaArry.length; i++) {
  if (criteriaArry[i] == "Y")
  {
    charArry[i];
    console.log(charArry[i]);
  }
}
//var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}

function writePassword() {
  var length = prompt("How long do you want your password? (Please enter a number.)");
  
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
