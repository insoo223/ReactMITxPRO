/*** 5 Change Color Of Square And Track State: random color using palet
 * Ref: https://student.emeritus.org/courses/2663/pages/video-6-7-10-09-change-color-of-square-and-track-state?module_item_id=582140
 */
import React from 'react'
import ReactDOM from 'react-dom'


const Square = ({id}) => {
  const [color, setColor] = React.useState('green');
  const palet = ["red", "green", "blue"];
  const getRandomColor = () => palet[Math.floor(Math.random()*3)];

  return (
    <button type="button" 
      onClick={ e => 
        {
          setColor(getRandomColor());
          e.target.style.background = color;
        }
      }
    >
        <h1>{id}</h1>
    </button>
  ); //return
}//Square

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  let status = `Player ${player}`;
  function renderSquare (i) {
    return <Square id={i}></Square>;
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