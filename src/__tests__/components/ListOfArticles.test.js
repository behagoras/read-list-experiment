import React from 'react';
import 'jest-styled-components';
// import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ListOfArticles from '../../components/ListOfArticles';
import Article from '../../components/Article';

const mockStore = [
  { 'name': 'Soda', 'price': '10.00', 'image': 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&750&w=800&h=800&q=80', '_id': '1' },
  { 'name': 'Soda', 'price': '10.00', 'image': 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&750&w=800&h=800&q=80', '_id': '2' },
];

describe('<ListOfArticles />', () => {
  it('should contain an Article', () => {
    const wrapper = shallow(<ListOfArticles store={mockStore} />);
    expect(wrapper.find(Article)).toHaveLength(2);
  });
});
