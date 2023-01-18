var boxes = document.querySelectorAll(".tic-tac-toe-box");
var answerBtns = document.getElementById("user-answer").querySelectorAll("button");
var gameOver = false;
var arrayBoard = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
var turn = -1;   //turn has the value of 1 if the current move is x, 0 if the current move is 0, and -1 if the game does not start.
var computerMoveFirst = -1;
var winner = -1; //if x wins, winner has the value of 1, 0 otherwise
var singleMode = false; //if playerMode = false, the current mode is multi-player mode, if playerMode = true, the currentMode is single-player mode 
var darkMode = false; //If dark mode is being turned on, darkMode = true, else darkMode = false