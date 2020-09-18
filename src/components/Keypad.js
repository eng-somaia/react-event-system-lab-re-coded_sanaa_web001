import React, { Component } from 'react';

export default class Keypad extends Component {
keyIsUp = ()=> {
    return 'Entering password...'
  }
render() {
    return (
    <div >
    <input type="password" keyUp= {this.keyIsUp} />
    </div>
    )
}
}
