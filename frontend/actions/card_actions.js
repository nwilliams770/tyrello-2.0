import * as APIUtil from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const RECEIVE_UPDATED_CARDS = 'RECEIVE_UPDATED_CARDS';

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});

export const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const receiveUpdatedCards = cards => ({
  type: RECEIVE_UPDATED_CARDS,
  cards
});

export const fetchCards = (id) => dispatch => (
  APIUtil.fetchCards(id).then(cards => (dispatch(receiveCards(cards))))
);

export const fetchCard = () => dispatch => (
  APIUtil.fetchCards().then(card => (dispatch(receiveCard(card))))
);

export const createCard = (params) => dispatch => (
  APIUtil.createCard(params).then(card => dispatch(receiveCard(card)))
);

export const editCard = (params) => dispatch => (
  APIUtil.editCard(params).then(cards => dispatch(receiveUpdatedCards(cards)))
);

export const deleteCard = (id) => dispatch => (
  APIUtil.deleteCard(id).then(cards => dispatch(receiveUpdatedCards(cards)))
);