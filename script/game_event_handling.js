//Event listeners for each box in the gameboard
boxes.forEach(function (box) {
    box.addEventListener("mouseover", function () {
        if (turn == -1 || gameOver) {
            return;
        }

        let box = event.target;
        let boxId = parseInt(box.id);

        if (arrayBoard[boxId] != -1) {
            return;
        }

        if (turn % 2 == 1) {
            box.classList.add("trans-x");
        }
        else {
            box.classList.add("trans-o");
        }
    });

    box.addEventListener("mouseleave", function () {
        let box = event.target;
        let boxId = parseInt(box.id);

        if (arrayBoard[boxId] != -1) {
            return;
        }

        box.classList.remove("trans-x", "trans-o");
    });

    box.addEventListener("click", function () {
        if ((turn % 2 == computerMoveFirst || computerMoveFirst == -1) && singleMode) {
            //Check if the current turn is human player's turn    
            //If computer plays first, then human player's turn must be even
            //If computer plays second, then human player's turn must be odd

            return;
        }
        let box = event.target;

        if (box.classList.contains("x") || box.classList.contains("o") || gameOver || turn == -1) {
            return;
        }

        box.classList.remove("trans-x", "trans-o");

        let boxId = parseInt(box.getAttribute("id"));

        arrayBoard[boxId] = (turn++) % 2;

        if (arrayBoard[boxId] == 1) {
            box.classList.add("x");
        }
        else {
            box.classList.add("o");
        }

        if (turn < 10 && singleMode) {
            computerMove();
        }

        winner = checkWinner();

        if (winner == 0) {
            askPlayAgain();
            gameOver = true;
        }
        else if (winner == 1) {
            askPlayAgain();
            gameOver = true;
        }
        else if (isTie()){
            askPlayAgain();
            gameOver = true;
        }
    })
})

//Ask human player whether computer goes first
answerBtns.forEach(
    function (button) {
        button.addEventListener('click', function () {
            //If one button was clicked, then do nothing
            if (computerMoveFirst != -1) {
                return;
            }
            
            //Each button has a value, either 0 or 1
            //If the clicked button has the value of 0, then human player goes first
            const clickedBtn = event.target;

            computerMoveFirst = parseInt(clickedBtn.getAttribute("value"));
            turn = 1;

            if (computerMoveFirst == 1) {
                computerMove();
            }

            // document.getElementById("question-1").style.display = "none";

            document.getElementById("main-menu").style.display = "none";

            document.getElementById("question-1").classList.remove("main-menu-displayed");
            document.getElementById("question-1").classList.add("main-menu-hidden");

            document.querySelector("#gameboard").style.filter = "blur(0)";
            
            //Change cursor property of each box after the player answers the question
            boxes.forEach(function (box) {
                box.style.cursor = "pointer";
            })
        })
    }
);

//Show the button to ask player whether he/she wants to play again
//This button appears when the match finishes
function askPlayAgain() {
    //Change gameboard and boxes property after the match is over
    setTimeout(function () {
        document.getElementById("gameboard").style.filter = "blur(10px)";
        boxes.forEach(function (box) {
            box.style.cursor = "default";
        })
    
        let resultBoard = document.getElementById("result-board");
    
        if (winner == 1) {
            document.getElementById("result").innerText = "X is the winner!";
        }
        else if (winner == 0) {
            document.getElementById("result").innerText = "O is the winner!";
        }
        else {
            document.getElementById("result").innerText = "Game over. Tie!"
        }
    
        //View result for users
        document.getElementById("main-menu").style.display = "block";

        resultBoard.classList.remove("main-menu-hidden");
        resultBoard.classList.add("main-menu-displayed");
        
        // resultBoard.style.position = "absolute";
    }, 500);
}

//Turn the board back to the initial state if the 'ask-play-again button' is clicked
document.getElementById("reset-btn").addEventListener("click", function () {
    let resultBoard  = document.getElementById("result-board");
    let modeOptions = document.getElementById("mode-options");

    resultBoard.classList.remove("main-menu-displayed");
    resultBoard.classList.add("main-menu-hidden");

    // document.getElementById("question-1").classList.remove("main-menu-hidden");
    // document.getElementById("question-1").classList.add("main-menu-displayed");

    modeOptions.classList.remove("main-menu-hidden");
    modeOptions.classList.add("main-menu-displayed");

    //Remove all x's and o's
    for (let i = 0; i < 9; i++) {
        arrayBoard[i] = -1;
        document.getElementById("" + i).classList.remove("o");
        document.getElementById("" + i).classList.remove("x");
    }

    turn = -1;
    gameOver = false;
    computerMoveFirst = -1;
});

document.querySelectorAll("#mode-options > button").forEach(function (button) {
    button.addEventListener("click", function () {
        let clicked = event.target;
        singleMode = (clicked.value == 1) ? true : false;

        let modeOptions = document.getElementById("mode-options");

        if (singleMode) {
            let question1 = document.getElementById("question-1");

            question1.classList.remove("main-menu-hidden");
            question1.classList.add("main-menu-displayed");
        }
        else {
            document.getElementById("main-menu").style.display = "none";

            document.getElementById("question-1").classList.remove("main-menu-displayed");
            document.getElementById("question-1").classList.add("main-menu-hidden");

            document.querySelector("#gameboard").style.filter = "blur(0)";
            
            //Change cursor property of each box after the player answers the question
            boxes.forEach(function (box) {
                box.style.cursor = "pointer";
            })
            
            turn = 1;
        }

        modeOptions.classList.remove("main-menu-displayed");
        modeOptions.classList.add("main-menu-hidden")
    })
})