import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  align-items:center;
  max-width:100%;
  @media screen and (max-width:800px) {
    display:block;
  }
`;
const SearchBar = styled.input`
  border:none;
  font-size:20px;
  padding:5px 15px;
  outline:none;
  min-width:300px;
  &::placeholder {
    font-size:20px;
  }
  height: 40px;
  @media screen and (max-width:800px) {
    min-width:default;
  }
`;
const Form = styled.form`
  display:grid;
  align-items:center;
  grid-template-columns:1fr 20px 20px;
  background:white;
  margin: auto;
  padding: 0 25px;
  grid-gap:5px;
  border-radius:50px;
  box-shadow:5px 5px 50px 0px rgba(0,0,0,0.2);
  @media screen and (max-width:800px) {
    /* display:block; */
    padding:0;
    margin:0;
    border-radius:initial;
    grid-template-columns:1fr;

  }

`;
const ButtonIcon = styled.div`
  display:${(props) => (props.hidden ? 'none' : 'block')};
  font-size:25px;
  color:#62D8AF;
  cursor:pointer;
  opacity:.7;
  &:hover {
    opacity:1;
  }
  @media screen and (max-width:800px) {
    display:none;
  }

`;
const FilterButton = styled.div`
  width:25px;
  display:${(props) => (props.hidden ? 'none' : 'block')};
  font-size:25px;
  color:#62D8AF;
  cursor:pointer;
  opacity:.3;
  float:left;
  margin-left:5px;
  &:hover {
    opacity:1;
  }
  @media screen and (max-width:800px) {
    color:#062319;
    margin-top:10px;

  }
`;

const Filter = ({ writing, handleChange, handleReset, handleAscending, handleDescending }) => {
  return (
    <Container>
      <Form>
        <SearchBar onChange={handleChange} type="text" name="" placeholder="Buscar" id="search" />
        <ButtonIcon onClick={handleReset} hidden={!writing}>
          <i className="fa fa-close" />
        </ButtonIcon>
        <ButtonIcon>
          <i className="fa fa-search" />
        </ButtonIcon>
      </Form>
      <FilterButton onClick={handleDescending}>
        <i className="fas fa-sort-amount-down-alt" />
      </FilterButton>
      <FilterButton onClick={handleAscending}>
        <i className="fas fa-sort-amount-up-alt" />
      </FilterButton>
      {/* <input type="button" value="ascendente" onClick={handleAscending} />
      <input type="button" value="descendente" onClick={handleDescending} /> */}
    </Container>
  );
};

export default Filter;
