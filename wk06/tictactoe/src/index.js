/*** 7 Pass State From Child To Parent
 * Ref: https://student.emeritus.org/courses/2663/pages/video-6-8-4-39-pass-state-from-child-to-parent?module_item_id=582142
 */
import React from 'react'
import ReactDOM from 'react-dom'


//Child
const Square = ({id, player}) => {
  const [color, setColor] = React.useState('green');
  const palet = ["red", "green", "blue"];
  const getRandomColor = () => palet[Math.floor(Math.random()*3)];

  return (
    <button type="button" 
      onClick={ e => 
        {
          setColor(getRandomColor());
          e.target.style.background = color;
          alert(`I'm Square ${id}`);
        }
      }
    >
        <h1>{id}:{player}</h1>
    </button>
  ); //return
}//Square

//Parent
const Board = () => {
  const [player, setPlayer] = React.useState(1);
  let status = `Player ${player}`;
  function renderSquare (i) {
    return <Square id={i} player={player}></Square>;
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