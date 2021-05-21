/*** 3.2	Control Component With OnClick Events
 * Ref: https://student.emeritus.org/courses/2663/pages/video-6-3-6-4-15-35-generate-players-on-the-tic-tac-toe-board-and-control-component-with-onclick-events?module_item_id=582137
 */
import React from 'react'
import ReactDOM from 'react-dom'

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  let status = `Player ${player}`;
  return (
    <div className="game-board" 
      onClick={e =>
        {
          setPlayer((player+1)%2);
          status = `Player ${player}`;
          e.target.style.background="red";
          e.target.style.width=200;
        }
      }
    >
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  )//return
}//Board

ReactDOM.render(<Board />, document.getElementById('root'));