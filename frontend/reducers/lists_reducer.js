import { merge } from 'lodash';

import {
  RECEIVE_LISTS,
  RECEIVE_LIST, 
  RECEIVE_UPDATED_LISTS} from '../actions/list_actions';

const defaultState = ({
  byId: {},
  allIds: {}
});

const listsReducer = (state= defaultState, action) => {
  // Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTS:
      return merge({}, defaultState, action.lists);
    case RECEIVE_LIST:
      return merge({}, state, action.list);
    case RECEIVE_UPDATED_LISTS:
      return merge({}, defaultState, action.lists);
    default:
      return state;
  }
};

export default listsReducer;