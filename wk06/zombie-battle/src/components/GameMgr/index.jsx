import React, { Component } from 'react';
import Zombie from '../Zombie';

const Humbug = {
    name: 'Humbug',
    level: 5,
    hp: 20
}

class GameMgr extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Zombie name={"Geek"} level={5} hp={21}></Zombie>
                <Zombie {...Humbug}></Zombie>
            </div>
        )
    }
}

export default GameMgr;
