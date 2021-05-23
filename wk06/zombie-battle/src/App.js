/*** 15 Zombie-battle:Communication bet. paranet(GameMgr) & child(Zombie) components
 * Ref: How to Handle Communication Between Parent and Child Components in ReactJS https://www.pluralsight.com/guides/how-to-handle-communication-between-parent-and-child-components-in-reactjs
 */
import React, { Component } from 'react';
import './App.css';

import GameMgr from './components/GameMgr';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameMgr />
      </div>
    );
  }
}

export default App;
