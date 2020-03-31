/* eslint-disable no-case-declarations */
// import actions from '../actions';

function reducer(state = [], action) {
  switch (action.type) {
    case 'FILTER':
      return { ...state, filtered: state.original.filter((article) => article.name.toUpperCase().includes(action.filter.toUpperCase())) };
    case 'SORT-ASCENDING':
      return { ...state, filtered: state.filtered.sort((a, b) => (a.name > b.name ? -1 : 1)).slice() };
    case 'SORT-DESCENDING':
      return { ...state, filtered: state.filtered.sort((a, b) => (a.name < b.name ? -1 : 1)).slice() };
    default:
      return state;
  }

}

export default reducer;
