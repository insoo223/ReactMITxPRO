/*** 17.1 Passing Player From Parent To Child
 * Ref: https://student.emeritus.org/courses/2663/pages/video-6-13-6-14-14-51-passing-player-from-parent-to-child-and-tracking-total-game-state?module_item_id=582153
 */
 import React from 'react'
 import ReactDOM from 'react-dom'
 

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
           let nextPlayer = newState({id:id, color:col});
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
   
   /*** array of states
    * state is an object comprised w/id and color
    ***/ 
   const [state, setState] = React.useState([]); 
   
   //current player
   let status = `Player ${player}`;
   
   //component's mounting state
   const [mounted, setMounted] = React.useState(true);

   //toggle a component's mounting state
   const toggle = () => setMounted(!mounted);

   //way to communicate w/child
   const newState = ob =>
   {
     let nextPlayer = (player+1)%2;
     setPlayer(nextPlayer);
     setState([...state, ob]);
     console.log(`adding state ${JSON.stringify(state)}`);
     status = `Player ${nextPlayer}`;
     return nextPlayer;
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
       <div>
         <button onClick={toggle}>Show/Hide Row</button>
       </div>
       <div id="info">
         <h1>{status}</h1>
       </div>
     </div>
   )//return
 }//Board
 
 ReactDOM.render(<Board />, document.getElementById('root'));