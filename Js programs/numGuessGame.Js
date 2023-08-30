const answer = Math.floor(Math.random() * 10) + 1;
let guesses = 0;

document.getElementById("submitBtn").onclick = function () {
  let guess = document.getElementById("text").value;
  guesses += 1;
  if (guess == answer) {
    alert(`${answer} is the number. It took you ${guesses} guess(es).`);
  } else if (guess < answer) {
    alert("Too small!");
  }
  else{
    alert("too large");
  }
};
