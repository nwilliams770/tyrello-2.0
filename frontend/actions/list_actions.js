import * as APIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const RECEIVE_UPDATED_LISTS = "RECEIVE_UPDATED_LISTS";

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const receiveUpdatedLists = lists => ({
  type: RECEIVE_UPDATED_LISTS,
  lists
});

export const fetchLists = (id) => dispatch => (
  APIUtil.fetchLists(id).then(lists => (dispatch(receiveLists(lists))))
);

export const fetchList = () => dispatch => (
  APIUtil.fetchLists().then(list => (dispatch(receiveList(list))))
);

export const createList = (params) => dispatch => (
  APIUtil.createList(params).then(list => dispatch(receiveList(list)))
);

export const editList = (params) => dispatch => (
  APIUtil.editList(params).then(lists => dispatch(receiveLists(lists)))
);

export const deleteList = (params) => dispatch => (
  APIUtil.deleteList(params).then(lists => dispatch(receiveUpdatedLists(lists)))
);
