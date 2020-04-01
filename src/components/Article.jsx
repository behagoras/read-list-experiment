/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  /* width: 300px; */
  overflow:hidden;
  transition: all .2s ease-in-out;
  border-radius:10px;
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows:200px 100px;
  box-shadow:10px 10px 10px -5px rgba(102,102,102,.3);
  & figure {
    position:relative;
    height: 100%;
    width: 100%;
    padding:0;
    margin:0;
    opacity:1;
    transition: all .2s ease-in-out;
    & img {
      width: 100%;
      height:100%;
      object-fit:cover;
      object-position:bottom;
    }
  }
  &:hover {
    transform:scale(1.1);
    & figure {
      transform:scale(2);
      opacity:0.5;
    }
  }
`;

const Info = styled.div`
  background-color:#FAFAFA;
  position:relative;
  padding:16px 24px;
  transform:${(props) => (props.hover ? 'scale(1.3)' : 'scale(1)')};
  transition: all .2s ease-in-out;
  transform-origin: 0 0;

`;
const Title = styled.h2`
  margin:0;
`;
const Price = styled.p`
  font-size:small;
  margin: 5px 0;
  & span {
    font-weight:bold;
  }
`;

const Article = ({ name = '', price = '', image = '', _id = '' }) => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(true);
  };
  const handleHoverLeave = () => {
    setHover(false);
  };
  return (
    <Container onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
      <Link to="/">
        <figure hover={hover}>
          <img src={image} alt={name} />
        </figure>
      </Link>
      <Info hover={hover}>
        <Title>{name}</Title>
        <Price>Price <span>${price}</span></Price>
      </Info>
    </Container>
  );
};

export default Article;
