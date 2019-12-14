import React from 'react';
import Result from './Result.jsx';
import PadNumber from './PadNumber.jsx';
import PadOperator from './PadOperator.jsx';

const initialState = {
  number: 0,
  display_value: 0,
  operation: null,
  operand: 0,
  operator: 0,
};

const operations = {
  '+': 'Addition',
  '-': 'Subtraction',
  'x': 'Multiply',
  '/': 'Devision'
}
function Addition(a, b) {
  return (a + b)
}
function Subtraction(a, b) {
  return (a - b)
}
function Multiply(a, b) {
  return a * b
}
function Devision(a, b) {
  if (b === 0) {
    return 0;
  }
  return parseFloat(a) / b
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }

  handleNumberChange(number) {
    switch (typeof number) {
      case 'number':
        this.setState(state => ({display_value: this.state.display_value * 10 + number, number}));
        break;
      case 'string':
        if (number === 'c') {
          this.setState(initialState);
        } else if (number === '=') {
          this.setState(state => ({operator: this.state.display_value}));
          setTimeout(() => {
            const fn = operations[this.state.operation];
            const v = eval(fn)(this.state.operand, this.state.operator)
            this.setState(state => ({display_value: v}))
          }, 100)
        } else {
          this.setState(state => ({operand: this.state.display_value}))
          this.setState({display_value: 0, operation: number})
        }
        break;
    }
  }
  render() {
    const display_value = this.state.display_value;

    return (
      <div>
        <div className="row">
          <Result display_value={display_value} />
        </div>
        <div className="row">
          <PadNumber value={7} onChangeDisplay={this.handleNumberChange} />
          <PadNumber value={8} onChangeDisplay={this.handleNumberChange} />
          <PadNumber value={9} onChangeDisplay={this.handleNumberChange} />
          <PadOperator value="/" onChangeDisplay={this.handleNumberChange} />
        </div>
        <div className="row">
          <PadNumber value={4} onChangeDisplay={this.handleNumberChange} />
          <PadNumber value={5} onChangeDisplay={this.handleNumberChange} />
          <PadNumber value={6} onChangeDisplay={this.handleNumberChange} />
          <PadOperator value="x" onChangeDisplay={this.handleNumberChange} />
        </div>
        <div className="row">
          <PadNumber value={1} onChangeDisplay={this.handleNumberChange} />
          <PadNumber value={2} onChangeDisplay={this.handleNumberChange} />
          <PadNumber value={3} onChangeDisplay={this.handleNumberChange} />
          <PadOperator value="-" onChangeDisplay={this.handleNumberChange} />
        </div>
        <div className="row">
          <PadOperator value="c" onChangeDisplay={this.handleNumberChange} />
          <PadNumber value={0} onChangeDisplay={this.handleNumberChange} />
          <PadOperator value="=" onChangeDisplay={this.handleNumberChange} />
          <PadOperator value="+" onChangeDisplay={this.handleNumberChange} />
        </div>
      </div>
     );
  }
}
