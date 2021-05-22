/*** 10 Mounting And Unmounting Square Components: Solution code, Show/Hide Individual Square Button 
 * Ref: But when unmounting only right to left direcion order. Not independent order unmounting! https://student.emeritus.org/courses/2663/assignments/107298?module_item_id=582146 
 */
 import React from 'react'
 import ReactDOM from 'react-dom'
 
 const Square = ({ takeTurn, id }) => {
  const mark = ['O', 'X', '+'];
  // id is the square's number
  // filled tells you if square has been filled
  // tik tells you symbol in square (same as player)
  // call takeTurn to tell Parent the square is  filled
  const [filled, setFilled] = React.useState(false);
  const [tik, setTik] = React.useState(2);

  // Step 1: Move the mounted state & toggle from the board component to here
  const [mounted, setMounted] = React.useState(true);
  const toggle = () => setMounted(!mounted);
  
  // Step 2: Check to see if the mounted state is false. If it is we want to return null instead of returning the button
  if (!mounted) return null;

  return (
    // Step 3: Trigger toggle() when button is clicked
    <button
      // DO NOT DELETE THIS id
      id={`square-button-${id}`}
      onClick={() => {
        toggle();
        setTik(takeTurn(id));
        setFilled(true);
      }}
    >
      <h1>{mark[tik]}</h1>
    </button>
  );
};//Square

const Board = () => {
  // 1st player is X ie 1
  // State keeps track of next player and gameState
  const [player, setPlayer] = React.useState(1);
  const [mounted, setMounted] = React.useState(true);
  const [gameState, setGameState] = React.useState([]);

  const toggle = () => setMounted(!mounted);
  const status = `Palyer: ${player}`

  const takeTurn = (id) => {
    setGameState([...gameState, { id: id, player: player }]);
    setPlayer((player + 1) % 2); // get next player
    return player;
  };
  function renderSquare(i) {
    // use properties to pass callback function takeTurn to Child
    return <Square takeTurn={takeTurn} id={i} mounted={mounted}></Square>;
  }

  return (
    <div className="game-board">
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>
        <h1>{status}</h1>
      </div>
    </div>
  );
};//Board

const Game = () => {
  return (
    <div className="game">
      <Board></Board>
    </div>
  );
};//Game

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
