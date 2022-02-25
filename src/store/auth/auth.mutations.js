import getAuthActionType from './auth.types';

export default {
  [getAuthActionType().SIGN_UP_START]: (state) => {
    state.isSignUpSubmitting = true;
  },
  [getAuthActionType().SIGN_IN_START]: (state) => {
    state.isSignInSubmitting = true;
  },
  [getAuthActionType().SIGN_UP_SUCCESS]: (state) => {
    state.isSignUpSubmitting = false;
  },
  [getAuthActionType().SIGN_IN_SUCCESS]: (state) => {
    state.isSignInSubmitting = false;
    state.isLoggedIn = true;
  },
  [getAuthActionType().SIGN_UP_FAILURE]: (state) => {
    state.isSignUpSubmitting = false;
    state.isSignInSubmitting = false;
  },
  [getAuthActionType().SIGN_IN_FAILURE]: (state) => {
    state.isSignUpSubmitting = false;
    state.isSignInSubmitting = false;
  },
  [getAuthActionType().CHECK_USER_SESSION]: (state, payload) => {
    state.isLoggedIn = payload;
  },
};
