import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Option from './Option';

describe('<Option />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Option />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders empty when no props supplied', () => {
    const wrapper = shallow(<Option />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders selected option when props are supplied', () => {
    const wrapper = shallow(
      <Option feature="Display" idx={1} 
        selectedOption={{
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});