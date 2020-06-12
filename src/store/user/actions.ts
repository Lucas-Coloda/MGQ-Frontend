const fetchUser = (val: any, user: any): void => {
  val.commit('SET_LOGGED_IN', user !== null);

  if (user) {
    val.commit('SET_USER', {
      displayName: user.displayName,
      email: user.email,
    });
  } else {
    val.commit('SET_USER', null);
  }
};

const actions = {
  fetchUser: fetchUser,
};

export default actions;
