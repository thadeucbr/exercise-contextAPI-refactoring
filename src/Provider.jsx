import React, { Component } from 'react';
import Context from './Context'
class Provider extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({cars: { ...this.state.cars, [car]: side }})
  }

  render(){
    const { children } = this.props;
    const context = { ...this.state.cars, moveCar: this.moveCar }
    return (
      <Context.Provider value={ context }>
        {children}
      </Context.Provider>
    )
  }
}

export default Provider;