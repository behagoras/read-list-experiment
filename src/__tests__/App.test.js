import React from 'react';
import 'jest-styled-components';
import toJson from 'enzyme-to-json';

import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  const output = shallow(<App />);
  const jsonOutput = toJson(output);

  it('Should match Snapshot and render an app', () => {
    expect(jsonOutput).toMatchSnapshot();
  });
  it('Should have a BrowserRouter as the first child', () => {
    expect(toJson(output).children[0].type).toBe('BrowserRouter');
  });
});
