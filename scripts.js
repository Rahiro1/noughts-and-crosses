


const gameManager = (function(){
    let playerOne = createPlayer("X");
    let playerTwo = createPlayer("O");
    let activePlayer = playerOne;
    const hasWon = () => "Not Implemented Error";

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

    function createGameBoard(){
        let gameSquares = [createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare(), createGameSquare()]

        return {gameSquares};

        function createGameSquare(){
            symbol : "";
            return {symbol}; 
        }
    }
});