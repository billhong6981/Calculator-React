import React, { Component } from 'react';

export default class Result extends Component {
    render() {
        const { display_value } = this.props;

        return (
            <div className="result">
                {display_value}
            </div>
        )
    }
}
