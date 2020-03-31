import React from 'react';
import styled from 'styled-components';

import ListOfArticles from '../components/ListOfArticles';
import store from '../mocks/store.json';

const Header = styled.div``;
const Container = styled.div``;
const Footer = styled.div``;
const Title = styled.h2``;

const Home = () => (
  <Container>
    <Header>Header</Header>
    <Title>Title</Title>
    <ListOfArticles store={store} />
    <Footer>Footer</Footer>
  </Container>
);

export default Home;
