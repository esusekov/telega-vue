import * as mutationTypes from './../../mutation-types';

export default {
  [mutationTypes.SET_PHONE](state, data) {
    state.auth = {
      ...state.auth,
      ...data,
    }
  },
  [mutationTypes.LOGOUT](state) {
    state = {
      user: null,
      auth: { },
    }
  },
  [mutationTypes.SET_USER](state, user) {
    state.user = user
  },
};
