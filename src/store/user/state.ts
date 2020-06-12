export interface UserState {
  loggedIn: boolean;
  user: Record<string, any>;
}

const defaultState: UserState = {
  loggedIn: false,
  user: {},
};

export default defaultState;
