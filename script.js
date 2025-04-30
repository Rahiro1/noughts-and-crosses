
let buttonOne = document.querySelector("#square1");
let buttonTwo = document.querySelector("#square2");
let buttonThree = document.querySelector("#square3");
let buttonFour = document.querySelector("#square4");
let buttonFive = document.querySelector("#square5");
let buttonSix = document.querySelector("#square6");
let buttonSeven = document.querySelector("#square7");
let buttonEight = document.querySelector("#square8");
let buttonNine = document.querySelector("#square9");

let buttonArray = [buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive, buttonSix, buttonSeven, buttonEight, buttonNine];
let pWinningText = document.querySelector("#info-text");


const gameManager = (function(){
    let playerOne = createPlayer("X");
    let playerTwo = createPlayer("O");
    let activePlayer = playerOne;
    let pWinText = pWinningText;

    const gameboard = (function(){
        let gameSquares = [createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare()]

        return {gameSquares, fillGameSquare};

        function fillGameSquare(sqRef, symbol){
            gameSquares[sqRef].symbol = symbol;
        }

        function createGameSquare(){
            symbol = "";
            return {symbol};
        }
    })();

    const resolveSquareClick = (sqRef, btnPressed) => {
        if(gameboard.gameSquares[sqRef].symbol !== ""){
            return;
        }
        gameboard.fillGameSquare(sqRef, activePlayer.symbol);
        btnPressed.innerText = activePlayer.symbol;
        winCheckObj = checkForWin();
        if(winCheckObj.isGameEnd){
            pWinText.innerText = "Game Over. " + winCheckObj.winner + " wins!";
        }
        changeActivePlayer();
    };

    function checkForWin () {
        let board = gameboard.gameSquares;
        let isGameEnd = false;
        let winner = ""; 

        checkThreeSquares(0,1,2);
        checkThreeSquares(0,3,6);
        checkThreeSquares(0,4,8);
        checkThreeSquares(2,5,8);
        checkThreeSquares(2,4,7);
        checkThreeSquares(6,7,8);

        return {isGameEnd, winner};

        // checks if all three squares have the same symbol and flags the game to end if so
        function checkThreeSquares(sqOne, sqTwo, sqThree){
            if(board[sqOne].symbol === ""){
                return
            }
            if(board[sqOne].symbol === board[sqTwo].symbol && board[sqOne].symbol === board[sqThree].symbol){
                flagGameEnd(board[sqOne].symbol);
            }
        }

        function flagGameEnd(winSymbol){
            isGameEnd = true;
            winner = winSymbol;
        }

    };

    const getActivePlayer = () => activePlayer;
    const setActivePlayer = (player) => activePlayer = player;
    const changeActivePlayer = () => {
        if(activePlayer == playerOne){
            activePlayer = playerTwo;
        } else{
            activePlayer = playerOne;
        }
    }


    function createPlayer(playerSymbol){
        const symbol = playerSymbol;
        return {symbol};
    }

    return {resolveSquareClick};
})();

function addOnClick(btnItem){
    btnItem.addEventListener("click", function(e) {onClick(e)});
}

function onClick(e){
    let btnTarget = e.target;
    gameManager.resolveSquareClick(buttonArray.indexOf(btnTarget), btnTarget);
}

buttonArray.forEach(addOnClick);