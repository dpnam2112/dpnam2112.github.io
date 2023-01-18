function isTie() {
    if (checkWinner() != -1) {
        return false;
    }

    for (let i = 0; i < 9; i++) {
        if (arrayBoard[i] == -1) {
            return false;
        }
    }

    return true;
}

function checkWinner() {
    for (let i = 0; i < 3; i++)
    {
        if (arrayBoard[i*3] == arrayBoard[i*3 + 1] && arrayBoard[i*3 + 1] == arrayBoard[i*3 + 2] && arrayBoard[i*3] != -1)
            return arrayBoard[i*3];

        if (arrayBoard[i] == arrayBoard[i + 3] && arrayBoard[i + 3] == arrayBoard[i + 6] && arrayBoard[i] != -1)
            return arrayBoard[i];
    }

    if (arrayBoard[0] == arrayBoard[4] && arrayBoard[4] == arrayBoard[8] && arrayBoard[0] != -1)
        return arrayBoard[0];
    
    if (arrayBoard[2] == arrayBoard[4] && arrayBoard[4] == arrayBoard[6] && arrayBoard[2] != -1)
        return arrayBoard[2];

    return -1;
}

//evalLine function and evaluateBoard function are used to evaluate states of the game
//Minimax algorithm requires to evaluate final states of the game

function evalLine(board, positions) {
    //board: array contains 9 integers
    //x: index of col

    let count = [0, 0];
    //the first element is the number of 'x'
    //the second element is the number of empty cells
    
    //count the number of 'x', empty cells
    //note that number of 'o' = 3 - number of 'x' - number of empty cells

    for (let i = 0; i < positions.length; i++) {
        let pos = positions[i];
        
        if (board[pos] == 1) {
            count[0]++;
        }
        else if (board[pos] == -1) {
            count[1]++;
        }
    }

    let sign = (count[0] == 0) ? -1 : 1;
    
    if (count[0] == 0) {
        count[0] = 3 - count[0] - count[1];
    }

    if (count[0] == 3) {
        return sign * 100;
    }
    else if (count[0] == 2 && count[1] == 1) {
        return sign * 10;
    }
    else if (count[0] == 1 && count[1] == 2) {
        return sign * 1;
    }

    return 0;
}

function evaluateBoard(board) {
    let combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let score = 0;

    for (let i = 0; i < combos.length; i++) {
        score += evalLine(board, combos[i]);
    }

    return score;
}

//This minimax variation uses alpha-beta pruning technique
function minimax(board, turn, alpha, beta) {
    //If computer goes first, It makes a random move
    if (turn == 1) {
        return [Math.floor(Math.random() * 100) % 9, 0];
    }

    let checkWin = checkWinner();

    if (checkWin == 0)
        return [-1, -100];
    else if (checkWin == 1)
        return [-1, 100];

    let optimalMove = 0;

    //Check if there is any empty cell left in the board
    while (board[optimalMove] != -1 && optimalMove < 9) {
        optimalMove++;
    }

    //If there are no empty cells, then we return -1 as the optimal move
    if (optimalMove == 9) {
       return [-1, evaluateBoard(board)];
    }

    board[optimalMove] = turn % 2;
    let optimalScore = minimax(board, turn + 1)[1];
    board[optimalMove] = -1;

    for (let i = optimalMove + 1; i < 9; i++) {
        if (board[i] == -1) {
            board[i] = turn % 2;
    
            let newScore = minimax(board, turn + 1, alpha, beta)[1];

            if (newScore > optimalScore && turn % 2 == 1 || newScore < optimalScore && turn % 2 == 0) {
                optimalScore = newScore;
                optimalMove = i;

                if (turn % 2 == 1) {
                    alpha = newScore;
                }
                else {
                    beta = newScore;
                }
            }

            board[i] = -1;

            if (alpha > beta) {
                return [optimalMove, optimalScore];
            }
        }
    }

    return [optimalMove, optimalScore];
}

function computerMove() {

    let optimalState = minimax(arrayBoard, turn, -1000, 1000);

    arrayBoard[optimalState[0]] = turn % 2;
    let box = document.getElementById(optimalState[0].toString());

    if (turn % 2 == 0) {
        box.classList.add("o");
    }
    else {
        box.classList.add("x");
    }

    turn++;
}