import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ListOfArticles from '../components/ListOfArticles';

const Container = styled.div``;

const Title = styled.h2`
  margin:50px;
  color: #62D8AF;
  font-size:40px;
`;

const Home = (props) => {
  useEffect(() => {
    props.dispatch({
      type: 'SORT-DESCENDING',
    });
  }, []);
  return (
    <Container>
      <Title>Articles to buy</Title>
      <ListOfArticles store={props.filtered} />
    </Container>
  );
};

const mapStateToProps = ({ filtered }) => {
  return {
    filtered,
  };
};

export default connect(mapStateToProps)(Home);
