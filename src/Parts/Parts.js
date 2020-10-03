import React, { Component } from 'react';
import slugify from 'slugify';
import USCurrencyFormat from '../USCurrencyFormat';

import './Parts.css'

class Parts extends Component {
  static defaultProps = {
    itemHash: '',
    feature: '',
    item: {
      name: '',
      cost: 0
    },
    selectedFeatureName: '',
    updateFeature: () => {return}
  };

  render() {
    return (
      <div className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(this.props.feature)}
          checked={this.props.item.name === this.props.selectedFeatureName}
          onChange={() => this.props.updateFeature(this.props.feature, this.props.item)}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}

export default Parts;