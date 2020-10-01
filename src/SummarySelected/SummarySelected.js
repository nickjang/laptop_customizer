import React, { Component } from 'react';
import USCurrencyFormat from '../USCurrencyFormat'

import './SummarySelected.css'

class SummarySelected extends Component {
  static defaultProps = {
    feature: [],
    selectedOption: {}
  };

  render() {
    const selectedOption = this.props.selectedOption;
    return (
      <div className="summary__option" >
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