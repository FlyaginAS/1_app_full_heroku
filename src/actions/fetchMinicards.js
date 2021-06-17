const sortbyChange = (newSort) => {
  return {
    type: 'SORTBY_CHANGE',
    payload: {
      sortBy: newSort,
    },
  };
};
const fetchMinicardsSuccess = (items) => {
  return {
    type: 'FETCH_MINICARDS_SUCCESS',
    payload: {
      items,
    },
  };
};
const fetchMinicardsRequest = () => {
  return {
    type: 'FETCH_MINICARDS_REQUEST',
  };
};
const fetchMinicardsFailure = (error) => {
  return { type: 'FETCH_MINICARDS_FAILURE', payload: { error } };
};
const fetchMinicards = (loadService, dispatch) => (topic, sortBy, location) => {
  dispatch(fetchMinicardsRequest());
  loadService
    .getMiniCards(topic, sortBy, location)
    .then((items) => dispatch(fetchMinicardsSuccess(items)))
    .catch((err) => dispatch(fetchMinicardsFailure(err)));
};

export { fetchMinicards, sortbyChange };
