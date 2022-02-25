// eslint-disable-next-line import/no-extraneous-dependencies
import { debounce } from 'lodash';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { register, signIn } from '@/services';
import getAuthActionType from './auth.types';

const actionFailure = (payload) => {
  const { code: errorCode, message: errorMessage } = payload;
  console.error(errorCode, errorMessage);
};

export default {
  // Sign up start
  [getAuthActionType().SIGN_UP_START]: async ({ commit, dispatch }, payload) => {
    commit(getAuthActionType().SET_IS_SIGN_UP_SUBMITTING, true);

    try {
      const { email, password, additionalInfo } = payload;
      const userCredential = await register(email, password, additionalInfo);
      dispatch(getAuthActionType().SIGN_UP_SUCCESS, userCredential);
    } catch (error) {
      dispatch(getAuthActionType().SIGN_UP_FAILURE, error);
    }
  },
  // Sign in start
  [getAuthActionType().SIGN_IN_START]: async ({ commit, dispatch }, payload) => {
    commit(getAuthActionType().SIGN_IN_START);

    try {
      const userCredential = await signIn(payload.email, payload.password);
      dispatch(getAuthActionType().SIGN_IN_SUCCESS, userCredential);
    } catch (error) {
      debounce(() => {
        dispatch(getAuthActionType().SIGN_IN_FAILURE, error);
      }, 1000)();
    }
  },
  // Sign up success
  [getAuthActionType().SIGN_UP_SUCCESS]: ({ commit }) => {
    commit(getAuthActionType().SIGN_UP_SUCCESS);
  },
  // Sign in success
  [getAuthActionType().SIGN_IN_SUCCESS]: ({ commit }) => {
    commit(getAuthActionType().SIGN_IN_SUCCESS);
  },
  // Action failure
  [getAuthActionType().SIGN_UP_FAILURE]: ({ commit }) => {
    commit(getAuthActionType().SIGN_UP_FAILURE);
    actionFailure();
  },
  [getAuthActionType().SIGN_IN_FAILURE]: ({ commit }) => {
    commit(getAuthActionType().SIGN_IN_FAILURE);
    actionFailure();
  },
  // Check user login session
  [getAuthActionType().CHECK_USER_SESSION]: async ({ commit }) => {
    try {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        commit(getAuthActionType().CHECK_USER_SESSION, !!user);
        unsubscribe();
      });
    } catch (error) {
      commit(getAuthActionType().CHECK_USER_SESSION, false);
    }
  },
};
