import React, { Component } from 'react';
import FormFeature from '../FormFeature/FormFeature';

import './CustomizerForm.css'

class CustomizerForm extends Component {
  static defaultProps = {
    features: {},
    selected: {} ,
    updateFeature: () => {}
  }
  
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <FormFeature key={featureHash} idx={idx} featureName={feature}
          feature={this.props.features[feature]} updateFeature={this.props.updateFeature}
          selectedFeatureName={this.props.selected[feature].name} />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default CustomizerForm;