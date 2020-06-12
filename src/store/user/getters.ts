const user = (state: any): any => state.user;

const userLogged = (state: any): any => state.user.loggedIn;

const getters = {
  user: user,
  userLogged: userLogged,
};

export default getters;
