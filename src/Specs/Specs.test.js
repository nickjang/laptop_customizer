import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Specs from './Specs';

describe('<Specs />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Specs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders empty when no props supplied', () => {
    const wrapper = shallow(<Specs />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders feature with options when props are supplied', () => {
    let feature = [
      {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      },
      {
        name: '15',
        cost: 100
      }
    ];
    
    const wrapper = shallow(
      <Specs key="feature-1" idx={1} featureName="Display"
        feature={feature} updateFeature={() => { }} selectedFeatureName="15" />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});