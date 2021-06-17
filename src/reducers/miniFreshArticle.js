const updateMiniFreshArticle = (state, action) => {
  if (state === undefined) {
    return {
      data: {},
      loading: true,
      error: false,
    };
  }
  switch (action.type) {
    case 'FETCH_FRESH_MINIARTICLE_REQUEST':
      return {
        data: {},
        loading: true,
        error: false,
      };
    case 'FETCH_FRESH_MINIARTICLE_SUCCESS':
      return {
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case 'FETCH_FRESH_MINIARTICLE_FAILURE':
      return {
        data: {},
        loading: false,
        error: action.payload.error,
      };
    default:
      return state.miniFreshArticle;
  }
};

export default updateMiniFreshArticle;
