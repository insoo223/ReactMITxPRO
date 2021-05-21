/*** 4.1	Add Squares As Child Components
 * Ref: https://student.emeritus.org/courses/2663/pages/video-6-3-6-4-15-35-generate-players-on-the-tic-tac-toe-board-and-control-component-with-onclick-events?module_item_id=582137
 */
import React from 'react'
import ReactDOM from 'react-dom'

const Square = () => {
  return <button type="button"></button>; //return
}//Square

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  let status = `Player ${player}`;
  function renderSquare (i) {
    return <Square></Square>;
  }
  return (
    <div className="game-board" >
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  )//return
}//Board

ReactDOM.render(<Board />, document.getElementById('root'));