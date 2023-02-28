"use strict";

let p = document.querySelector(".head");
let popupWindow = document.querySelector(".popup");
let overlay = document.querySelector(".overlay");
let header = document.querySelector(".turn");
let boxes = [];

// The animation after winning
function animation (){
  p.classList.add("blink-1")
}

// What will happen after anyone wins!
function theWinner(num1, num2, num3) {
  header.innerHTML = ` 💯 The ${`<span> ${boxes[num1]} </span> Won!`}  💯`;
  document.getElementById("box" + num1).style.background = "#001244";
  document.getElementById("box" + num2).style.background = "#001244";
  document.getElementById("box" + num3).style.background = "#001244";
  setInterval(function () {
    header.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 3200);
  animation()
}

// To reload The page after no one wins
function reloadPage() {
  setTimeout(function () {
    location.reload();
  }, 100);
}

// Open popup after no one wins
let openPopup = function () {
  popupWindow.style.display = "block";
};

// Open overlay after no one wins
function openOverlay() {
  overlay.style.display = "block";
}


// The winner Function!
function winner() {
  for (let i = 1; i < 10; i++) {
    boxes[i] = document.getElementById("box" + i).innerHTML;
  }
  if (boxes[1] == boxes[2] && boxes[2] == boxes[3] && boxes[1] != "") {
    theWinner(1, 2, 3);
  } else if (boxes[4] == boxes[5] && boxes[5] == boxes[6] && boxes[5] != "") {
    theWinner(4, 5, 6);
  } else if (boxes[7] == boxes[8] && boxes[8] == boxes[9] && boxes[8] != "") {
    theWinner(7, 8, 9);
  } else if (boxes[1] == boxes[4] && boxes[4] == boxes[7] && boxes[1] != "") {
    theWinner(1, 4, 7);
  } else if (boxes[2] == boxes[5] && boxes[5] == boxes[8] && boxes[5] != "") {
    theWinner(2, 5, 8);
  } else if (boxes[3] == boxes[6] && boxes[6] == boxes[9] && boxes[6] != "") {
    theWinner(3, 6, 9);
  } else if (boxes[1] == boxes[5] && boxes[5] == boxes[9] && boxes[5] != "") {
    theWinner(1, 5, 9);
  } else if (boxes[3] == boxes[5] && boxes[5] == boxes[7] && boxes[5] != "") {
    theWinner(3, 5, 7);
  } else if (
    boxes[1] != "" &&
    boxes[2] != "" &&
    boxes[3] != "" &&
    boxes[4] != "" &&
    boxes[5] != "" &&
    boxes[6] != "" &&
    boxes[7] != "" &&
    boxes[8] != "" &&
    boxes[9] != ""
  ) {
    openPopup();
    openOverlay();
  }
}

let turn = "X";

// The turn handler
function game(id) {
  let element = document.getElementById(id);
  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "O";
    header.innerHTML = `  It's ${`<span> O </span>`} Turn `;
  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "X";
    header.innerHTML = ` It's ${`<span> X </span>`} Turn `;
  }
  winner();
}
