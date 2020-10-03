import React, { Component } from 'react';
import Parts from '../Parts/Parts';
import slugify from 'slugify';

import './Specs.css'

class Specs extends Component {
  static defaultProps = {
    idx: 0,
    featureName: '',
    feature: [],
    updateFeature: () => {},
    selectedFeatureName: ''
  }

  render() {
    const featureHash = this.props.featureName + '-' + this.props.idx;
    const options = this.props.feature.map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <Parts key={itemHash} itemHash={itemHash} feature={this.props.featureName} item={item}
          selectedFeatureName={this.props.selectedFeatureName} updateFeature={this.props.updateFeature} />
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{this.props.featureName}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default Specs;