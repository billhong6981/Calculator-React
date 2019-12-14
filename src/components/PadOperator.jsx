import React, { Component, PropTypes } from 'react';


export default class PadOperator extends Component {
  constructor(props) {
    super(props);
    this.change_display = this.change_display.bind(this);
  };

  change_display() {
    this.props.onChangeDisplay(this.props.value);
  }
  render(){
    let {value} = this.props;
    return (
        <div className="pad operator" onClick={this.change_display}>
            {value}
        </div>
    )
  }
}
