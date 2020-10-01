import React, { Component } from 'react';
import USCurrencyFormat from '../USCurrencyFormat'

import '../App.css'

class SummarySelected extends Component {
  render() {
    const featureHash = this.props.feature + '-' + this.props.idx;
    const selectedOption = this.props.selectedOption;

    return (
      <div className="summary__option" key={featureHash} >
        <div className="summary__option__label">{this.props.feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  }
}

export default SummarySelected;