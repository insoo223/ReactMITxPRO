import React, { Component } from 'react';

class Zombie extends Component {

  render() {
        return(
            <div>
                <h1>Zmb: {this.props.name}</h1>
                <ul style={{listStyle: 'none'}}>
                    <li><span>Level: {this.props.level}</span></li>
                    <li><span>hp: {this.props.hp}/{this.props.hp}</span></li>
                </ul>
            </div>
        )
    }
}

export default Zombie;