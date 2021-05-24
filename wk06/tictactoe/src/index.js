/*** 19 Tic-Tac-Toe Final Refactor: (Limitation) Only can check winner for player 1
 * Ref: https://student.emeritus.org/courses/2663/pages/video-6-15-12-52-tic-tac-toe-final-refactor?module_item_id=582155 
 */
 import React from 'react'
 import ReactDOM from 'react-dom'
 import {checkWinner} from './winner'

 //Child
 const Square = ({id, newState}) => {
   const [color, setColor] = React.useState('green');
   const [status, setStatus] = React.useState(null);
   const xo = ["O", "X"];
   const palet = ["red", "green", "blue"];
   const getRandomColor = () => palet[Math.floor(Math.random()*3)];
   /*
   React.useEffect( () => 
    {
      console.log(`Render ${id}`);
      return () => console.log(`unmounting Square ${id}`);
    }
   )
   */
 
   return (
     <button type="button" 
       onClick={ e => 
         {
           let col = getRandomColor();
           setColor(col);
           //let nextPlayer = newState({id:id, color:col});
           let nextPlayer = newState(id);
           setStatus(nextPlayer);
           e.target.style.background = col;
         }
       }
     >
         <h1>{xo[status]}</h1>
     </button>
   ); //return
 }//Square
 
 //Parent
 const Board = () => {
   //player O or X  
   const [player, setPlayer] = React.useState(1); 
   
   /*** array of states = total states of a game
    * state is an object comprised w/id and color
    ***/ 
   const [state, setState] = React.useState(Array(9).fill(null)); 
   
   //current player
   let status = `Player ${player}`;
   let winner = checkWinner(state);
   if (winner != null) 
   {
     status = `Player ${winner} wins!`
   }


   //component's mounting state
   const [mounted, setMounted] = React.useState(true);

   //toggle a component's mounting state
   const toggle = () => setMounted(!mounted);

   //way to communicate w/child
   /*
   const newState = ob =>
   {
     let nextPlayer = (player+1)%2;
     setPlayer(nextPlayer);
     setState([...state, ob]);
     console.log(`adding state ${JSON.stringify(state)}`);
     status = `Player ${nextPlayer}`;
     return nextPlayer;
   }//newState
   */
   const newState = idOfSquare =>
   {
    state[idOfSquare] = player; //player is present player
    setState(state); //state is array of 0 or 1 or null
    let nextPlayer = (player+1)%2;
    setPlayer(nextPlayer);
    //setState([...state, ob]);
    //console.log(`adding state ${JSON.stringify(state)}`);
    //status = `Player ${nextPlayer}`;
    //return nextPlayer;
    return player;
   }//newState

   function renderSquare (i) {
     return <Square id={i} player={player} newState={newState}></Square>;
   }
   return (
     <div className="game-board" >
       <div className="grid-row">
         {mounted && renderSquare(0)}
         {mounted && renderSquare(1)}
         {mounted && renderSquare(2)}
       </div>
       <div className="grid-row">
         {mounted && renderSquare(3)}
         {mounted && renderSquare(4)}
         {mounted && renderSquare(5)}
       </div>
       <div className="grid-row">
         {mounted && renderSquare(6)}
         {mounted && renderSquare(7)}
         {mounted && renderSquare(8)}
       </div>
       <div>
         <button onClick={toggle}>Show/Hide Row</button>
         <h1>{status}</h1>
       </div>
       <div id="info">
         <h1>{status}</h1>
       </div>
     </div>
   )//return
 }//Board
 
 ReactDOM.render(<Board />, document.getElementById('root'));