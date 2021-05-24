/*** 16 UseState Delay: asynchronous update of useState
 * Ref: https://student.emeritus.org/courses/2663/pages/video-6-12-3-47-usestate-delay?module_item_id=582152
 */
 import React from 'react'
 import ReactDOM from 'react-dom'
 

 //Child
 const Square = ({id, player}) => {

   const [color, setColor] = React.useState('green');
   const palet = ["red", "green", "blue"];
   const getRandomColor = () => palet[Math.floor(Math.random()*3)];
   React.useEffect( () => 
    {
      console.log(`Render ${id}`);
      return () => console.log(`unmounting Square ${id}`);
    }
   )
 
   return (
     <button type="button" 
       onClick={ e => 
         {
           let col = getRandomColor();
           setColor(col);
           e.target.style.background = color;
           //alert(`I'm Square ${id}`);
         }
       }
     >
         <h1>{id}</h1>
     </button>
   ); //return
 }//Square
 
 //Parent
 const Board = () => {
   const [player, setPlayer] = React.useState(1);
   let status = `Player ${player}`;
   const [mounted, setMounted] = React.useState(true);

   const toggle = () => setMounted(!mounted);
   function renderSquare (i) {
     return <Square id={i} player={player}></Square>;
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