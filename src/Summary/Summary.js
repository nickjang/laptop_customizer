import React, { Component } from 'react';
import SummarySelected from '../SummarySelected/SummarySelected';
import Total from '../Total/Total';
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

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total selected={this.props.selected} />
      </section>
    );
  }
}

export default Summary;