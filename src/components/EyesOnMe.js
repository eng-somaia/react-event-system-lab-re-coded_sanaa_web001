import React, { Component } from 'react';

export default class EyesOnMe extends Component {
focusOn = ()=> {
    cosole.log('Good!')
  }
focusOff = ()=> {
    cosole.log('Hey! Eyes on me!')
  }
render() {
    return (
    <div >
    <button focus= {this.focusOn} blur= {this.focusOff}>Focus?</button>
    </div>
    )
}
}
