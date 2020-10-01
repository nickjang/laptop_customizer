import React, { Component } from 'react';
import SummarySelected from '../SummarySelected/SummarySelected';
import USCurrencyFormat from '../USCurrencyFormat'

import './Summary.css'

class Summary extends Component {
  static defaultProps = {
    selected: []
  };
  
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return <SummarySelected key={featureHash} feature={feature} idx={idx} selectedOption={this.props.selected[feature]} />;
    });

    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
  }
}

export default Summary;