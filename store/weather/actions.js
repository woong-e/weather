const scope = 'WEATHER';
const actions = {
  FETCH         : `${scope}_FETCH`,
  FETCH_SUCCESS : `${scope}_FETCH_SUCCESS`,

  CHANGE_LOADING: `${scope}_CHANGE_LOADING`,

  fetch: (latitude, longitude) => ({
    type: actions.FETCH,
    latitude,
    longitude
  }),

  fetchSuccess: (payload) => ({
    type: actions.FETCH_SUCCESS,
    payload
  }),

  changeLoading: (loading) => ({
    type: actions.CHANGE_LOADING,
    loading
  })

};

export default actions;
export {
  scope
}
