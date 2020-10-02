import React, { Component } from 'react';
import USCurrencyFormat from '../USCurrencyFormat'
import './Total.css';

class Total extends Component {
  static defaultProps = {
    selected: []
  };

  render() {
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    );
  }
}

export default Total;