import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  countCharacter = () => {
    this.setState({inputText: ''})
  }

  onChangeChar = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state
    const count = inputText.length

    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading">
            Calculate the
            <br />
            Letters you <br /> enter
          </h1>
          <label className="phrase" htmlFor="inputText">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            id="inputText"
            className="count-bar"
            onChange={this.onChangeChar}
            value={inputText}
          />
          <p className="count-letter" onClick={this.countCharacter}>
            No.of letters: {count}
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="img-resize"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
