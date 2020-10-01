import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

const FEATURES = {
  Processor: [
    {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    {
      name: 'Professor X AMD Fire Breather with sidewinder technology',
      cost: 1200
    }
  ],
  "Operating System": [
    {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
    {
      name: 'Bodhi Linux',
      cost: 300
    }
  ],
  "Video Card": [
    {
      name: 'Toyota Corolla 1.5v',
      cost: 1150.98
    },
    {
      name: 'Mind mild breeze 2000',
      cost: 1345
    }
  ],
  Display: [
    {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500
    },
    {
      name: '15.3" HGTV (3840 x 2160) Home makeover edition',
      cost: 1400
    },
  ]
};

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders empty when no props supplied', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders App with form and summary when props are supplied', () => {
    const wrapper = shallow(
      <App features={FEATURES} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders App with last option from the form clicked in Summary', () => {
    const wrapper = shallow(
      <App features={FEATURES} />
    );
    console.log(wrapper.find('.feature').simulate('click'));
    wrapper.find('.feature').at(0).find('.feature__option').at(0).simulate('click');
    wrapper.find('.feature').at(0).find('.feature__option').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders App with last option from multiple features in Summary', () => {
    const wrapper = shallow(<App features={FEATURES} />);
    wrapper.find('.feature').at(0).find('.feature__option').at(0).simulate('click');
    wrapper.find('.feature').at(0).find('.feature__option').at(1).simulate('click');
    wrapper.find('.feature').at(1).find('.feature__option').at(0).simulate('click');
    wrapper.find('.feature').at(1).find('.feature__option').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});