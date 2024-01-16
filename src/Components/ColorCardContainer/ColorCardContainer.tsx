import React,{ Component} from 'react';
import './ColorCardContainer.css'
import ColorCard from '../../Components/ColorCard/ColorCard';


interface ColorCardContainerProps{
  
}

interface ColorCardContainerStates{
  counter: number;
  colorCards: React.JSX.Element[];
}

class ColorCardContainer extends Component<ColorCardContainerProps, ColorCardContainerStates> {
  constructor(props: ColorCardContainerProps){
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
      displayCounter();
     
    };

    var decreaseCounter = () => {
      this.setState((prevState) => ({counter: prevState.counter>0? prevState.counter-1: prevState.counter}));
      removeColorCard();
    };

    var displayCounter = () => {
      let isEven = counter%2 == 0;
      let isOdd = counter%2 != 0;
      let isPrime = true;
      if (counter != 2 && isEven) {
        this.setState((prevState) => ({
          colorCards: [...prevState.colorCards, <div className='green-style'><ColorCard text={counter.toString()} /></div>]
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
          colorCards: [...prevState.colorCards, <div className='red-style'><ColorCard text={counter.toString()} /></div>]
        }));
      }
    
      if ((isOdd && !isPrime)) {
        this.setState((prevState) => ({
          colorCards: [...prevState.colorCards, <div className='yellow-style'><ColorCard text={counter.toString()} /></div>]
        }));
      }
    };

    var removeColorCard = () => {
      this.setState((prevState) => {
        const updatedCards = [...prevState.colorCards];
        updatedCards.pop();
        return {colorCards: updatedCards};
      }); 
    };

    console.log(this.state.colorCards)
    return (
    <div className='div-container'>
        <header>
          <h1>Color Card Game</h1>
          <p>Color Card Generator</p>
          <button onClick={increaseCounter}>Add Card</button>
          <button onClick={decreaseCounter}>Remove Card</button>
        </header>
        
        <div className='container'>{this.state.counter>0? this.state.colorCards: 'No Cards'}</div>
    </div>);
  }
}

export default ColorCardContainer;