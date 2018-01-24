import { merge } from 'lodash';

import {
  RECEIVE_CARDS,
  RECEIVE_CARD
} from '../actions/card_actions';

const defaultState = ({
  byListId: {},
  allIds: {}
});

const cardsReducer = (state = defaultState, action) => {
  // Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CARDS:
      return merge({}, defaultState, action.cards);
    case RECEIVE_CARD:
      return merge({}, state, action.card);
    default:
      return state;
  }
};

export default cardsReducer;