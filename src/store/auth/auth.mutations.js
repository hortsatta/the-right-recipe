import { getAuthMutationType } from './auth.types';

export default {
  [getAuthMutationType().SET_IS_LOGGED_IN]: (state, payload) => {
    state.isLoggedIn = payload;
  },
  [getAuthMutationType().SET_IS_SIGN_IN_SUBMITTING]: (state, payload) => {
    state.isSignInSubmitting = payload;
  },
  [getAuthMutationType().SET_IS_SIGN_UP_SUBMITTING]: (state, payload) => {
    state.isSignUpSubmitting = payload;
  },
};
