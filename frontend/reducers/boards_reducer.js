import { merge } from 'lodash';

import {
  RECEIVE_BOARDS,
  RECEIVE_BOARD,
  RECEIVE_NEW_BOARD
} from '../actions/board_actions';

const defaultState = ({
  byId: {},
  allIds: {
    personal: [],
    shared: []
  }

});

const boardsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOARDS:
      return merge({}, state, action.boards);
    case RECEIVE_BOARD:
      return merge({}, state, action.board);
    default:
      return state;
  }
};

export default boardsReducer;