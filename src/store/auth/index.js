import state from './auth.state';
import getters from './auth.getters';
import mutations from './auth.mutations';
import actions from './auth.actions';

export const auth = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
export { default as getAuthActionType } from './auth.types';
