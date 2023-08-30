<script>
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var digit = document.getElementById("digit");
var ASCII character = document.getElementById("ASCII character");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate digits
  var digits = /[0-9]/g;
  if(myInput.value.match(digits)) {
    digit.classList.remove("invalid");
    digit.classList.add("valid");
  } else {
    digit.classList.remove("valid");
    digit.classList.add("invalid");
  }

  // Validate ASCII characters
  if(myInput.value.ASCII characters = 1-99) {
    ASCII character.classList.remove("invalid");
    ASCII character.classList.add("valid");
  } else {
    ASCII character.classList.remove("valid");
    ASCII character.classList.add("invalid");
  }
}
</script>
