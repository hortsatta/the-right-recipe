import getAuthActionType from './auth.types';

const signingFailure = (state) => {
  state.isSignUpSubmitting = false;
  state.isSignInOutSubmitting = false;
};

export default {
  [getAuthActionType().SIGN_UP_START]: (state) => {
    state.isSignUpSubmitting = true;
  },
  [getAuthActionType().SIGN_IN_START]: (state) => {
    state.isSignInOutSubmitting = true;
  },
  [getAuthActionType().SIGN_OUT_START]: (state) => {
    state.isSignInOutSubmitting = true;
  },
  [getAuthActionType().SIGN_UP_SUCCESS]: (state) => {
    state.isSignUpSubmitting = false;
  },
  [getAuthActionType().SIGN_IN_SUCCESS]: (state) => {
    state.isSignInOutSubmitting = false;
    state.isLoggedIn = true;
  },
  [getAuthActionType().SIGN_OUT_SUCCESS]: (state) => {
    state.isSignInOutSubmitting = false;
    state.isLoggedIn = false;
  },
  [getAuthActionType().SIGN_UP_FAILURE]: signingFailure,
  [getAuthActionType().SIGN_IN_FAILURE]: signingFailure,
  [getAuthActionType().SIGN_OUT_FAILURE]: signingFailure,
  [getAuthActionType().CHECK_USER_SESSION]: (state, payload) => {
    state.isLoggedIn = payload;
  },
};
