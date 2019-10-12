import React, { Fragment } from 'react'

class Table extends React.Component {
  state = {addedMoney: 0}

  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  handleOnChange = (e) => {
    this.setState({
      addedMoney: parseInt(e.target.value, 10)
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addMoney(this.state.addedMoney)
    this.setState({addedMoney: 0})
  }

  render() {
    // console.log(this.state)
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${this.props.money} remaining!
        </h1>
        <div className="table">
          <div className="stack">
            { this.renderPlates(this.props.emptyPlates) }
          </div>
        </div>
        <div className="sushi-wallet">
          <h2>Sushi Wallet</h2>
          <form onSubmit={this.handleOnSubmit}>
            <label>Add money to your sushi wallet: </label>
            <input type="number" name="money" value={this.state.addedMoney} onChange={this.handleOnChange}></input>
            <input type="submit" value="Add Money"></input>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default Table