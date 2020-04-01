import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Filters from './Filter';

const Container = styled.div`
  /* background:#123; */
  width: auto;
  height: auto;
  padding:10px;
  padding:5px;
  display: grid;
  align-items:center;
  grid-template-columns:1fr 1fr 1fr;
`;

const Logo = styled.figure`
  margin:0;
  padding:0
  & img {
    margin:0;
    padding:0
  }
  @media screen and (max-width:800px) {
    display:none;
  }
`;

const Header = (props) => {
  const [writing, setWriting] = useState(false);
  const handleChange = (event) => {
    event.preventDefault();
    const $search = document.getElementById('search');
    const { value } = $search;
    props.dispatch({
      type: 'FILTER',
      filter: value,
    });
    if (value) {
      setWriting(true);
    } else {
      setWriting(false);
    }
  };
  const handleReset = (event) => {
    event.preventDefault();
    setWriting(false);
    const $search = document.getElementById('search');
    $search.value = '';
    props.dispatch({
      type: 'FILTER',
      filter: '',
    });
  };
  const handleAscending = (event) => {
    event.preventDefault();
    props.dispatch({
      type: 'SORT_ASCENDING',
    });
  };
  const handleDescending = (event) => {
    event.preventDefault();
    props.dispatch({
      type: 'SORT_DESCENDING',
    });

  };
  return (
    <Container>
      <Logo>
        <img src="https://oyster.io/wp-content/themes/oyster/images/oyster_mark_text.svg" alt="" />
      </Logo>
      <div>
        <Filters writing={writing} handleChange={handleChange} handleReset={handleReset} handleAscending={handleAscending} handleDescending={handleDescending} />
      </div>
    </Container>
  );
};

export default connect(null)(Header);
