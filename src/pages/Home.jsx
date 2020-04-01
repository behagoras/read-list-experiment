import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ListOfArticles from '../components/ListOfArticles';
import Filter from '../components/Filter';

const Header = styled.div``;
const Container = styled.div``;
const Footer = styled.div``;
const Title = styled.h2``;

const Home = (props) => {
  useEffect(() => {
    props.dispatch({
      type: 'SORT_DESCENDING',
    });
  }, []);
  return (
    <Container>
      <Header><Filter /></Header>
      <Title>Title</Title>
      <ListOfArticles store={props.filtered} />
      <Footer>Footer</Footer>
    </Container>
  );
};

const mapStateToProps = ({ filtered }) => {
  return {
    filtered,
  };
};

export default connect(mapStateToProps)(Home);
