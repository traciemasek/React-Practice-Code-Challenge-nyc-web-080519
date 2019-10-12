import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

class SushiContainer extends React.Component {
  //put the counter in state in this component bc table doesn't need to know about it and therefore it doesn't need lifted to app; 
  //the click handler functions to show more sushi can therefore live here too
  state = {counter: 0}

  handleMoreButtonClick = () => {
    let counterCopy = this.state.counter
    counterCopy +=4
    if (counterCopy >= this.props.sushi.length)  {counterCopy = 0 }
    this.setState({counter: counterCopy})
  }

  handleOtherButtonClick = () => {
    let counterCopy = this.state.counter
    counterCopy -=4
    if (counterCopy < 0)  {counterCopy = this.props.sushi.length - 4 }
    this.setState({counter: counterCopy})
  }

  displayFourSushi = () => {
    let counterCopy = this.state.counter;
    let copy = [...this.props.sushi]
    let fourSushi = copy.splice(counterCopy, 4)
    return fourSushi
  }
  
  render() {
    let displaySushis = this.displayFourSushi().map(sushiObj => <Sushi key={sushiObj.id} sushi={sushiObj} eatSushi={this.props.eatSushi}/>)
    
    return (
      <Fragment>
        <div className="belt">
          <MoreButton handleMoreButtonClick={this.handleOtherButtonClick}/>

          {displaySushis}

          <MoreButton handleMoreButtonClick={this.handleMoreButtonClick} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer