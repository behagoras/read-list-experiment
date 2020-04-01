import React from 'react';
import { connect } from 'react-redux';

const Filter = (props) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const $search = document.getElementById('search');
    const { value } = $search;
    props.dispatch({
      type: 'FILTER',
      filter: value,
    });
  };
  const handleReset = (event) => {
    event.preventDefault();
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
    <form onSubmit={handleFormSubmit}>
      <input type="search" name="" placeholder="Buscar" id="search" />
      <input type="submit" value="Buscar" />
      <input type="button" value="borrar" onClick={handleReset} />
      <input type="button" value="ascendente" onClick={handleAscending} />
      <input type="button" value="descendente" onClick={handleDescending} />
    </form>
  );
};

export default connect(null)(Filter);
