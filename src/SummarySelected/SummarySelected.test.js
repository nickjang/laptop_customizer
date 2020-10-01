import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SummarySelected from './SummarySelected';

describe('<SummarySelected />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SummarySelected />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders empty when no props supplied', () => {
    const wrapper = shallow(<SummarySelected />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders selected option when props are supplied', () => {
    const wrapper = shallow(
      <SummarySelected feature="Display" idx={1} 
        selectedOption={{
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});