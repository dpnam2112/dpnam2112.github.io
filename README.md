# TicTacToe
#### Video Demo: https://www.youtube.com/watch?v=vC-mn6mgdxI
#### Description:
In this project, I have written a simple tic-tac-toe using HTML, CSS and JavaScript.

About the structure of the project, it has one html file, one css file and a bunch of JavaScript files stored in 'script' folder.

About the structure of the website, It has only one page. The page has two main components: A menu that contains buttons and instructions for players; a 3x3 board. In the right-bottom corner of the page, there are a button which helps us switch between light mode and dark mode.

About CSS, I used a framework called 'Bootstrap'. I also used transition effects for the dark-mode toggling button.

About JavaScript, I seperated scripts into multiple files to help me handle the code easier. Specifically, the 'script' folder contains: dark\_mode.js (to handle dark-mode feature), 'game\_event\_handling.js' (to handle events fired by the user), 'global\_variable.js', 'minimax.js' (Minimax is the algorithm I used to implement the bot) and 'onload.js' (used to handle appearance effects).

In the 'global\_variables.js' file, I stored global variables like 'gameboard', an array that represents the board, each element in the array corresponds to a cell in the board. For example, the first element of the array corresponds to the top-left cell, the third element correspond to the top-right cell,... and so on. And also, I declares some variables like 'turn' or 'singleMode' to handle the logic.

In single-player mode, I implemented the bot by using an algorithm called 'Minimax'. About the references (slides, papers, .etc) which I used to implement the algorithm I will put them in the reference section below. The algorithm implementation code is put in 'minimax.js' file. I wrote a function named 'computerMove()' to help the bot make a move every time the human player makes a move.

In multi-player mode, my idea is very simple: I used a variable named 'turn' to determine whether the current move is of the X player or the O player. If the turn is even, then the current move is of the O player; and if the turn is odd, then the current move is of the X player.

I also implemented a very interesting feature called 'Dark mode'. Personally, I like dark mode :). I implement this feature by defining some classes in CSS. If the toggling button is clicked, classes corresponding to light/dark mode are added to some elements.

These are all that I want to write about my project. Thank you for reading my description (Actually, I am bad at English. If there are some parts which I wrote make you feel hard to understand, I am genuinely sorry about that :) ).

#### References:
These are references that I use to implement Minimax (There are a bunch of video tutorials about implementing a bot that play this game using Minimax algorithm on the internet or on Youtube, but I personally want to deeply understand and implement the algorithm and on my own, so I use academic resources as my references.):

http://web.mit.edu/sp.268/www/gamesearch.pdf

https://courses.engr.illinois.edu/ece448/fa2017/ece448fa2017lecture9.pdf   (Note: This one is pretty good if you want to understand the algorithm visually.)

https://web.eecs.umich.edu/~akamil/teaching/sp03/minimax.pdf
