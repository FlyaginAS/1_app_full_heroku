const updatePopularArticles = (state, action) => {
  if (state === undefined) {
    return {
      items: [],
      loading: true,
      error: false,
    };
  }
  switch (action.type) {
    case '1':
      return {
        data: {},
        loading: true,
        error: false,
      };
    case '1':
      return {
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case '1':
      return {
        data: {},
        loading: false,
        error: action.payload.error,
      };
    default:
      return state.popularArticles;
  }
};

export default updatePopularArticles;
