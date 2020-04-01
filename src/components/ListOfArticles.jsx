/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import Article from './Article';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px, auto));
  grid-gap: 50px;
  padding: 0 50px;
  justify-content: space-evenly;
`;

const ListOfArticles = ({ store = [] }) => (
  <Container>
    {
      store.map((article) => <Article key={article._id} {...article} />)
    }
  </Container>
);

export default ListOfArticles;
