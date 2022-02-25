export default (includeNamespace) => {
  const namespace = includeNamespace ? 'auth/' : '';

  return {
    SIGN_UP_START: `${namespace}signUpStart`,
    SIGN_UP_SUCCESS: `${namespace}signUpSuccess`,
    SIGN_UP_FAILURE: `${namespace}signUpFailure`,
    SIGN_IN_START: `${namespace}signInStart`,
    SIGN_IN_SUCCESS: `${namespace}signInSuccess`,
    SIGN_IN_FAILURE: `${namespace}signInFailure`,
    CHECK_USER_SESSION: `${namespace}checkUserSession`,
  };
};
