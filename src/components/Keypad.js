import React, { Component } from 'react';

export default class Keypad extends Component {
keyIsUp = ()=> {
    cosole.log('Entering password...')
  }
render() {
    return (
    <div >
    <input type="password" keyUp= {this.keyIsUp} />
    </div>
    )
}
}
