import defaultState from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const user = {
  state: defaultState,
  getters: getters,
  mutations: mutations,
  actions: actions,
};

export default user;
