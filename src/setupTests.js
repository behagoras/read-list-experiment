/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// import 'jest-styled-components';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: false,
});
