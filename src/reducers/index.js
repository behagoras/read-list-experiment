// import actions from '../actions';

function reducer(state = [], action) {
  switch (action.type) {
    case 'FILTER':
      return { ...state, filtered: state.original.filter((article) => article.name.toUpperCase().includes(action.filter.toUpperCase())) };
    case 'SORT-ASCENDING':
      return { ...state, filtered: state.filtered.sort((a, b) => (a.name > b.name ? -1 : 1)) };
    case 'SORT-DESCENDING':
      const filtered = state.filtered.sort((a, b) => (a.name < b.name ? -1 : 1));
      return { ...state, filtered };
    default:
      return state;
  }

}

export default reducer;
