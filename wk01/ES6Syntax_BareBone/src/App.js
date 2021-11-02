import {objDestruct, arrDestruct} from "./destruct"

function App() {
  return (
    <div>
      <h1>Let's Learn React w/Insoo!</h1>
      <h2>Destructure-Merge objects:</h2>{objDestruct()}
      <h2>Destructure-Merge arrays:</h2>{arrDestruct()}
    </div>
  );
}

export default App;
