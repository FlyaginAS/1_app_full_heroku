const updateArticle = (state, action) => {
  if (state === undefined) {
    return {
      data: {},
      loading: true,
      error: false,
    };
  }

  switch (action.type) {
    case 'FETCH_ARTICLE_REQUEST':
      return {
        data: {},
        loading: true,
        error: false,
      };
    case 'FETCH_ARTICLE_FAILURE':
      return {
        data: {},
        loading: false,
        error: action.payload.error,
      };
    case 'FETCH_ARTICLE_SUCCESS':
      return {
        error: false,
        loading: false,
        data: action.payload.data,
      };
    default:
      return state.article;
  }
};

export default updateArticle;
