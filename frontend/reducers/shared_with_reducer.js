import { RECEIVE_SHARED_WITH_USERS } from '../actions/user_actions';

const sharedWithReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHARED_WITH_USERS:
      return action.users;
    default:
      return state;
  }
};

export default sharedWithReducer;