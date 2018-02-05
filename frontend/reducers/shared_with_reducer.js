import { merge } from 'lodash';

import { RECEIVE_SHARED_BOARDS } from '../actions/board_actions';
import { RECEIVE_SHARED_USERS } from '../actions/user_actions';

const defaultState = {};

const sharedWithReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHARED_USERS:
      return merge({}, defaultState, action.users);
    case RECEIVE_SHARED_BOARDS:
      return merge({}, state, action.boards.user);
    default:
      return state;
  }
};

export default sharedWithReducer;