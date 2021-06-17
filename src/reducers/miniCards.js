const updateMiniCards = (state, action) => {
  if (state === undefined) {
    return {
      items: [],
      loading: true,
      error: false,
      count: 0,
      sortBy: 'fresh', //fresh or views
    };
  }

  switch (action.type) {
    case 'FETCH_MINICARDS_SUCCESS':
      return {
        ...state.miniCards,
        items: action.payload.items,
        loading: false,
        error: false,
        count: action.payload.items.length,
      };

    case 'FETCH_MINICARDS_FAILURE':
      return {
        ...state.miniCards,
        items: [],
        error: action.payload.error,
        loading: false,
      };

    case 'FETCH_MINICARDS_REQUEST':
      return {
        ...state.miniCards,
        items: [],
        error: false,
        loading: true,
      };
    case 'SORTBY_CHANGE':
      return {
        ...state.miniCards,
        sortBy: action.payload.sortBy,
      };

    default:
      return state.miniCards;
  }
};

export default updateMiniCards;
