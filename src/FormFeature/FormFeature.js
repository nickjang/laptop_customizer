import React, { Component } from 'react';
import FormFeatureOption from '../FormFeatureOption/FormFeatureOption';
import slugify from 'slugify';

import '../App.css'

class FormFeature extends Component {
  render() {
    const featureHash = this.props.featureName + '-' + this.props.idx;
    const options = this.props.feature.map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FormFeatureOption key={itemHash} itemHash={itemHash} feature={this.props.featureName} item={item}
          selectedFeatureName={this.props.selectedFeatureName} updateFeature={this.props.updateFeature}/>
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

export default FormFeature;