import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import getData from '../utils/getData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = styled.main``;

const AppLayout = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('http://localhost:3001/api/articles');
      console.log('fetched data', data);
      props.dispatch({
        type: 'SET_STATE',
        payload: {
          original: data.data,
          filtered: data.data,
        },
      });
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </div>
  );
};

export default connect(null)(AppLayout);
