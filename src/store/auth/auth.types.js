const getAuthMutationType = (includeNamespace) => {
  const namespace = includeNamespace ? 'auth/' : '';

  return {
    SET_IS_LOGGED_IN: `${namespace}setIsLoggedIn`,
    SET_IS_SIGN_IN_SUBMITTING: `${namespace}setIsSignInSubmitting`,
    SET_IS_SIGN_UP_SUBMITTING: `${namespace}setIsSignUpSubmitting`,
  };
};

const getAuthActionType = (includeNamespace) => {
  const namespace = includeNamespace ? 'auth/' : '';

  return {
    SIGN_UP_START: `${namespace}signUpStart`,
    SIGN_UP_SUCCESS: `${namespace}signUpSuccess`,
    SIGN_UP_FAILURE: `${namespace}signUpFailure`,
    SIGN_IN_START: `${namespace}signInStart`,
    SIGN_IN_SUCCESS: `${namespace}signInSuccess`,
    SIGN_IN_FAILURE: `${namespace}signInFailure`,
  };
};

export { getAuthMutationType, getAuthActionType };
