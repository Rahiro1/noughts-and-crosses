


const gameManager = (function(pWinningText){
    let playerOne = createPlayer("X");
    let playerTwo = createPlayer("O");
    let activePlayer = playerOne;
    let pWinText = pWinningText;

    const gameboard = (function(){
        let gameSquares = [createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare()]

        return {gameSquares};

        function fillGameSquare(sqRef, symbol){
            gameSquares[sqRef].symbol = symbol;
        }

        function createGameSquare(){
            symbol : "";
            return {symbol}; 
        }
    });

    function resolveSquareClick(sqRef, pSquareText){
        if(pText !== ""){
            return;
        }
        gameboard.fillGameSquare(sqRef, activePlayer.symbol);
        pSquareText.innerText = activePlayer.symbol;
        winCheckObj = checkForWin();
        if(winCheckObj.isGameEnd){
            pWinText.innerText = winCheckObj.winner;
        }
        changeActivePlayer();
    }

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

    
});