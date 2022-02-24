// eslint-disable-next-line import/no-extraneous-dependencies
import { debounce } from 'lodash';

import { register, signIn } from '@/services';
import { getAuthMutationType, getAuthActionType } from './auth.types';

const actionFailure = ({ commit }, payload) => {
  commit(getAuthMutationType().SET_IS_SIGN_UP_SUBMITTING, false);
  commit(getAuthMutationType().SET_IS_SIGN_IN_SUBMITTING, false);
  const { code: errorCode, message: errorMessage } = payload;
  console.error(errorCode, errorMessage);
};

export default {
  // Sign up start
  [getAuthActionType().SIGN_UP_START]: async ({ commit, dispatch }, payload) => {
    commit(getAuthMutationType().SET_IS_SIGN_UP_SUBMITTING, true);

    try {
      const userCredential = await register(payload.email, payload.password);
      dispatch(getAuthActionType().SIGN_UP_SUCCESS, userCredential);
    } catch (error) {
      dispatch(getAuthActionType().SIGN_UP_FAILURE, error);
    }
  },
  // Sign in start
  [getAuthActionType().SIGN_IN_START]: async ({ commit, dispatch }, payload) => {
    commit(getAuthMutationType().SET_IS_SIGN_IN_SUBMITTING, true);

    try {
      const userCredential = await signIn(payload.email, payload.password);
      dispatch(getAuthActionType().SIGN_IN_SUCCESS, userCredential);
    } catch (error) {
      debounce(() => {
        dispatch(getAuthActionType().SIGN_IN_FAILURE, error);
      }, 3000)();
    }
  },
  // Sign up success
  [getAuthActionType().SIGN_UP_SUCCESS]: ({ commit }) => {
    commit(getAuthMutationType().SET_IS_SIGN_UP_SUBMITTING, false);
  },
  // Sign in success
  [getAuthActionType().SIGN_IN_SUCCESS]: ({ commit }) => {
    commit(getAuthMutationType().SET_IS_LOGGED_IN, true);
    commit(getAuthMutationType().SET_IS_SIGN_IN_SUBMITTING, false);
  },
  // Action failure
  [getAuthActionType().SIGN_UP_FAILURE]: actionFailure,
  [getAuthActionType().SIGN_IN_FAILURE]: actionFailure,
};
