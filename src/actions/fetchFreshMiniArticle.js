const fetchFreshMiniarticleRequest = () => {
  return {
    type: 'FETCH_FRESH_MINIARTICLE_REQUEST',
  };
};
const fetchFreshMiniarticleSuccess = (data) => {
  return {
    type: 'FETCH_FRESH_MINIARTICLE_SUCCESS',
    payload: {
      data,
    },
  };
};
const fetchFreshMiniarticleFailure = (error) => {
  return {
    type: 'FETCH_FRESH_MINIARTICLE_FAILURE',
    payload: {
      error,
    },
  };
};
const fetchFreshMiniarticle = (loadService, dispatch) => (loc, id) => {
  dispatch(fetchFreshMiniarticleRequest());
  loadService
    .getArticle(loc, id)
    .then((data) => dispatch(fetchFreshMiniarticleSuccess(data)))
    .catch((err) => dispatch(fetchFreshMiniarticleFailure(err)));
};

export default fetchFreshMiniarticle;
