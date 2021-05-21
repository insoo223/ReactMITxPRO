/*** 4.2	Pass ID As State From Parent To Child: only id wo/props
 * Ref: https://student.emeritus.org/courses/2663/pages/video-6-5-6-6-7-35-add-squares-as-child-components-and-pass-id-as-state-from-parent-to-child?module_item_id=582139
 */
import React from 'react'
import ReactDOM from 'react-dom'

const Square = ({id}) => {
  return (
    <button type="button">
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