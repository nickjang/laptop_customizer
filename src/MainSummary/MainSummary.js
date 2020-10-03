import React, { Component } from 'react';
import Option from '../Option/Option';
import Total from '../Total/Total';
import './MainSummary.css'

class MainSummary extends Component {
  static defaultProps = {
    selected: []
  };
  
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return <Option key={featureHash} feature={feature} idx={idx} selectedOption={this.props.selected[feature]} />;
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

export default MainSummary;