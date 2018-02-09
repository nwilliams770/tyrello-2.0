import { merge } from 'lodash';

import {
  RECEIVE_CARDS,
  RECEIVE_CARD,
  RECEIVE_UPDATED_CARDS
} from '../actions/card_actions';

const defaultState = ({
  byListId: {},
  allListIds: [],
});

const cardsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CARDS:
      return merge({}, defaultState, action.cards);
    case RECEIVE_CARD:
      return merge({}, state, action.card);
    case RECEIVE_UPDATED_CARDS:
      return merge({}, defaultState, action.cards);
    default:
      return state;
  }
};

export default cardsReducer;