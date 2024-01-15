import { Component, useState } from 'react';
import ColorCard from '../ColorCard/ColorCard';
import './ColorCardContainer.css'




class ColorCardContainer extends Component {
  constructor(props){
    super(props);
  }
  state = {
    counter: 0,
    colorCards: [],
  }
  render(){

    const counter = this.state.counter;
    
    var increaseCounter = () => {

      this.setState({counter: this.state.counter + 1});
      
      let isEven = counter%2 == 0;
      let isOdd = counter%2 != 0;
      let isPrime = true;
      if (counter != 2 && isEven) {
        this.setState((prevState) => ({
          colorCards: [...prevState.colorCards, <div className='green-style'><ColorCard text={counter} /></div>]
        }));
      }
      if (counter > 2) {
        for (let i = 2; i <= counter/2; i++) {
            if (counter%i == 0) {
              isPrime = false;
            }
        }
      }
      if (isPrime) {
        if (counter == 1 || counter == 0) {
            isPrime = false;
          }
        else this.setState((prevState) => ({
          colorCards: [...prevState.colorCards, <div className='red-style'><ColorCard text={counter} /></div>]
        }));
      }
    
      if ((isOdd && !isPrime)) {
        this.setState((prevState) => ({
          colorCards: [...prevState.colorCards, <div className='yellow-style'><ColorCard text={counter} /></div>]
        }));
      }
    };
    console.log(this.state.colorCards)
    return (
    <div className='div-container'>
        <header>
          <h1>30 Days of React</h1>
          <p>Number Generator</p>
          <button onClick={increaseCounter}>Increase Number</button>
        </header>
        
        <div className='container'>{this.state.colorCards}</div>
    </div>);
  }
}

export default ColorCardContainer;