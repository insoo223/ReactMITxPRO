/*** 12 Parent And Child Re-render: Template code
 * Ref: https://student.emeritus.org/courses/2663/assignments/107299?module_item_id=582148
 */
 import React from 'react'
 import ReactDOM from 'react-dom'
 
// notice properties takeTurn and id are being passed in
const Square = ({ takeTurn, id, player }) => {
  console.log('Square re-rendering now.');
  const palet = ["blue", "red", "green"];
  // id is the square's number
  // We call takeTurn to tell Parent we have clicked in this square

  const [color, setColor] = React.useState(2);

  // function that takes the player as a parameter and then uses it in the calculation to setColor
  // but does NOT update the player held in the state of the Board component
  const innerTakeTurn = (id) => {
    return ((player + 1) % 2);
  };

  return (
    <button
      id={id}
      onClick={(e) => {
        setColor(innerTakeTurn(id));
        e.preventDefault();
        e.target.style.background = palet[color];
      }}
    ></button>
  );
};

const Board = () => {
  // 1st player is 1
  // State keeps track of next player
  const [player, setPlayer] = React.useState(1);
  console.log('Board re-rendering now.');

  // check for winner (see superset.js)
  let status = `Player ${player}`;
  console.log(`Status Player ${status}`);

  // Note that Child (Square Component) calls this function
  // However the function has access to the player held here
  const takeTurn = (id) => {
    setPlayer((player + 1) % 2); // get next player
    return player;
  };
  function renderSquare(i, color) {
    // use properties to pass callback function takeTurn to Child
    return <Square takeTurn={takeTurn} id={i} player={player}></Square>;
  }
  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
        <h1>{status}</h1>
        <button onClick={() => takeTurn()}> Change Player</button>
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      <Board></Board>
    </div>
  );
};

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
