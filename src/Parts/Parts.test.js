import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Parts from './Parts';

describe('<Parts />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Parts />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders empty when no props supplied', () => {
    const wrapper = shallow(
    <Parts />
      );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders option when props are supplied', () => {
    const wrapper = shallow(
    <Parts key={1} itemHash="feature-1" feature="Display" item={{name:'15', cost:10}}
      selectedFeatureName={'10'}/>
      );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});