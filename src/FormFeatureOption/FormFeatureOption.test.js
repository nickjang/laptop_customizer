import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormFeatureOption from './FormFeatureOption';

describe('<FormFeatureOption />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormFeatureOption />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders empty when no props supplied', () => {
    const wrapper = shallow(
    <FormFeatureOption />
      );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders option when props are supplied', () => {
    const wrapper = shallow(
    <FormFeatureOption key={1} itemHash="feature-1" feature="Display" item={{name:'15', cost:10}}
      selectedFeatureName={'10'}/>
      );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});