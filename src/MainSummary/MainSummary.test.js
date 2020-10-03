import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainSummary from './MainSummary';

const selected = {
  Processor: {
    name: '17th Generation Intel Core HB (7 Core with donut spare)',
    cost: 700
  },
  'Operating System': {
    name: 'Ubuntu Linux 16.04',
    cost: 200
  },
  'Video Card': {
    name: 'Toyota Corolla 1.5v',
    cost: 1150.98
  },
  Display: {
    name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
    cost: 1500
  }
}

describe('<MainSummary />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainSummary />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders empty when no props supplied', () => {
    const wrapper = shallow(<MainSummary />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders MainSummary with selected options when props are supplied', () => {
    const wrapper = shallow(
      <MainSummary selected={selected} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});