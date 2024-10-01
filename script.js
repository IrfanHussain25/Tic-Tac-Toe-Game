// Function called whenever user taps on any box
function myfunc() {

    // Setting DOM to all boxes or input field
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    var b5 = document.getElementById("b5").value;
    var b6 = document.getElementById("b6").value;
    var b7 = document.getElementById("b7").value;
    var b8 = document.getElementById("b8").value;
    var b9 = document.getElementById("b9").value;

    var b1btn = document.getElementById("b1");
    var b2btn = document.getElementById("b2");
    var b3btn = document.getElementById("b3");
    var b4btn = document.getElementById("b4");
    var b5btn = document.getElementById("b5");
    var b6btn = document.getElementById("b6");
    var b7btn = document.getElementById("b7");
    var b8btn = document.getElementById("b8");
    var b9btn = document.getElementById("b9");

    // Checking if Player X won or not and disabling all the other fields
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableAllButtonsExcept([b1btn, b2btn, b3btn]);
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableAllButtonsExcept([b1btn, b4btn, b7btn]);
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableAllButtonsExcept([b7btn, b8btn, b9btn]);
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableAllButtonsExcept([b3btn, b6btn, b9btn]);
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableAllButtonsExcept([b1btn, b5btn, b9btn]);
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableAllButtonsExcept([b3btn, b5btn, b7btn]);
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableAllButtonsExcept([b2btn, b5btn, b8btn]);
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableAllButtonsExcept([b4btn, b5btn, b6btn]);
    }

    // Checking if Player O won or not and disabling all the other fields
    else if ((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O') && (b3 == 'o' || b3 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        disableAllButtonsExcept([b1btn, b2btn, b3btn]);
    }
    else if ((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O') && (b7 == 'o' || b7 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        disableAllButtonsExcept([b1btn, b4btn, b7btn]);
    }
    else if ((b7 == 'o' || b7 == 'O') && (b8 == 'o' || b8 == 'O') && (b9 == 'o' || b9 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        disableAllButtonsExcept([b7btn, b8btn, b9btn]);
    }
    else if ((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O') && (b9 == 'o' || b9 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        disableAllButtonsExcept([b3btn, b6btn, b9btn]);
    }
    else if ((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O') && (b9 == 'o' || b9 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        disableAllButtonsExcept([b1btn, b5btn, b9btn]);
    }
    else if ((b3 == 'o' || b3 == 'O') && (b5 == 'o' || b5 == 'O') && (b7 == 'o' || b7 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        disableAllButtonsExcept([b3btn, b5btn, b7btn]);
    }
    else if ((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O') && (b8 == 'o' || b8 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        disableAllButtonsExcept([b2btn, b5btn, b8btn]);
    }
    else if ((b4 == 'o' || b4 == 'O') && (b5 == 'o' || b5 == 'O') && (b6 == 'o' || b6 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        disableAllButtonsExcept([b4btn, b5btn, b6btn]);
    }

    // Checking if all fields are filled and it's a tie
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') && (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') && (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        document.getElementById('print').innerHTML = "Match Tie";
    }

    else {
        // Toggle to the next player
        document.getElementById('print').innerHTML = "Player " + currentPlayer + "'s turn";
    }
}

// Function to disable all buttons except the winning ones
function disableAllButtonsExcept(winningButtons) {
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        if (!winningButtons.includes(cells[i])) {
            cells[i].disabled = true;
        }
    }
    // Highlight winning buttons
    for (let i = 0; i < winningButtons.length; i++) {
        winningButtons[i].style.color = "red";
    }
}

// Function to reset the game
function myfunc_2() {
    location.reload();
}

// Function to set value 'X' in the input box
function myfunc_3() {
    document.getElementById("b1").value = currentPlayer;
    document.getElementById("b1").disabled = true;
    togglePlayer();
}

function myfunc_4() {
    document.getElementById("b2").value = currentPlayer;
    document.getElementById("b2").disabled = true;
    togglePlayer();
}

function myfunc_5() {
    document.getElementById("b3").value = currentPlayer;
    document.getElementById("b3").disabled = true;
    togglePlayer();
}

function myfunc_6() {
    document.getElementById("b4").value = currentPlayer;
    document.getElementById("b4").disabled = true;
    togglePlayer();
}

function myfunc_7() {
    document.getElementById("b5").value = currentPlayer;
    document.getElementById("b5").disabled = true;
    togglePlayer();
}

function myfunc_8() {
    document.getElementById("b6").value = currentPlayer;
    document.getElementById("b6").disabled = true;
    togglePlayer();
}

function myfunc_9() {
    document.getElementById("b7").value = currentPlayer;
    document.getElementById("b7").disabled = true;
    togglePlayer();
}

function myfunc_10() {
    document.getElementById("b8").value = currentPlayer;
    document.getElementById("b8").disabled = true;
    togglePlayer();
}

function myfunc_11() {
    document.getElementById("b9").value = currentPlayer;
    document.getElementById("b9").disabled = true;
    togglePlayer();
}

// Toggle between players
let currentPlayer = "X";

function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}
