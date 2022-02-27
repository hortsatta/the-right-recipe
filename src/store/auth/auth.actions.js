import { debounce } from 'lodash';
import { getAuth } from 'firebase/auth';

import { register, signIn, signOut } from '@/services';
import getAuthActionType from './auth.types';

const DEBOUNCE_DURATION = 1000;

const actionFailure = (payload) => {
  const { code: errorCode, message: errorMessage } = payload;
  console.error(errorCode, errorMessage);
};

export default {
  // Sign up start
  [getAuthActionType().SIGN_UP_START]: async ({ commit, dispatch }, payload) => {
    commit(getAuthActionType().SIGN_UP_START, true);

    try {
      const { email, password, additionalInfo } = payload;
      await register(email, password, additionalInfo);
      debounce(() => {
        dispatch(getAuthActionType().SIGN_UP_SUCCESS, { email, password });
      }, DEBOUNCE_DURATION)();
    } catch (error) {
      debounce(() => {
        dispatch(getAuthActionType().SIGN_UP_FAILURE, error);
      }, DEBOUNCE_DURATION)();
    }
  },
  // Sign in start
  [getAuthActionType().SIGN_IN_START]: async ({ commit, dispatch }, payload) => {
    commit(getAuthActionType().SIGN_IN_START);

    try {
      const userCredential = await signIn(payload.email, payload.password);
      debounce(() => {
        dispatch(getAuthActionType().SIGN_IN_SUCCESS, userCredential);
      }, DEBOUNCE_DURATION)();
    } catch (error) {
      debounce(() => {
        dispatch(getAuthActionType().SIGN_IN_FAILURE, error);
      }, DEBOUNCE_DURATION)();
    }
  },
  // Sign out start
  [getAuthActionType().SIGN_OUT_START]: async ({ commit, dispatch }) => {
    commit(getAuthActionType().SIGN_OUT_START);

    try {
      await signOut();
      debounce(() => {
        dispatch(getAuthActionType().SIGN_OUT_SUCCESS);
      }, DEBOUNCE_DURATION)();
    } catch (error) {
      debounce(() => {
        dispatch(getAuthActionType().SIGN_OUT_FAILURE, error);
      }, DEBOUNCE_DURATION)();
    }
  },
  // Sign up success
  [getAuthActionType().SIGN_UP_SUCCESS]: ({ dispatch, commit }, payload) => {
    commit(getAuthActionType().SIGN_UP_SUCCESS);
    dispatch(getAuthActionType().SIGN_IN_START, payload);
  },
  // Sign in success
  [getAuthActionType().SIGN_IN_SUCCESS]: ({ commit }) => {
    commit(getAuthActionType().SIGN_IN_SUCCESS);
  },
  // Sign out success
  [getAuthActionType().SIGN_OUT_SUCCESS]: ({ commit }) => {
    commit(getAuthActionType().SIGN_OUT_SUCCESS);
  },
  // Action failure
  [getAuthActionType().SIGN_UP_FAILURE]: ({ commit }, payload) => {
    commit(getAuthActionType().SIGN_UP_FAILURE);
    actionFailure(payload);
  },
  [getAuthActionType().SIGN_IN_FAILURE]: ({ commit }, payload) => {
    commit(getAuthActionType().SIGN_IN_FAILURE);
    actionFailure(payload);
  },
  [getAuthActionType().SIGN_OUT_FAILURE]: (payload) => {
    actionFailure(payload);
  },
  // Check user login session
  [getAuthActionType().CHECK_USER_SESSION]: async ({ commit }) => {
    try {
      const auth = getAuth();
      commit(getAuthActionType().CHECK_USER_SESSION, !!auth.currentUser);
    } catch (error) {
      commit(getAuthActionType().CHECK_USER_SESSION, false);
    }
  },
};
