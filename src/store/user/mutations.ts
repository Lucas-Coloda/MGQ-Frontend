const SET_LOGGED_IN = (state: any, value: any): void => {
  state.user.loggedIn = value;
};

const SET_USER = (state: any, data: any): void => {
  state.user.data = data;
};

const mutations = {
  SET_LOGGED_IN: SET_LOGGED_IN,
  SET_USER: SET_USER,
};

export default mutations;
