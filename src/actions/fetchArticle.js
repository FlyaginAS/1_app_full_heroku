const fetchArticleRequest = () => {
  return {
    type: 'FETCH_ARTICLE_REQUEST',
  };
};
const fetchArticleFailure = (error) => {
  return {
    type: 'FETCH_ARTICLE_FAILURE',
    payload: {
      error,
    },
  };
};
const fetchArticleSuccess = (data) => {
  return {
    type: 'FETCH_ARTICLE_SUCCESS',
    payload: {
      data,
    },
  };
};
const fetchArticle = (loadService, dispatch) => (loc, id) => {
  dispatch(fetchArticleRequest());
  loadService
    .getArticle(loc, id)
    .then((article) => dispatch(fetchArticleSuccess(article)))
    .catch((err) => dispatch(fetchArticleFailure(err)));
};

export default fetchArticle;
