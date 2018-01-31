import { searchUserDatabase, fetchSharedWith } from '../util/user_api_util';

export const RECEIVE_USER_SEARCH_RESULTS = "RECEIVE_USER_SEARCH_RESULTS";
export const RECEIVE_SHARED_WITH_USERS = "RECEIVE_SHARED_WITH_USERS";

const receiveUserSearchResults = (users) => ({
  type: RECEIVE_USER_SEARCH_RESULTS,
  users
});

const receiveSharedWithUsers = (users) => ({
  type: RECEIVE_SHARED_WITH_USERS,
  users
});

export const searchDatabase = (query) => (dispatch) => (
  searchUserDatabase(query).then(
    (users) => dispatch(receiveUserSearchResults(users))
  )
);

export const fetchShared = (id) => dispatch => (
  fetchSharedWith(id).then(
    (users) => dispatch(receiveSharedWithUsers(users))
  )
);



