import { searchUserDatabase, fetchSharedWith } from '../util/user_api_util';
import { fetchSharedUsers } from '../util/board_share_api_util';

export const RECEIVE_USER_SEARCH_RESULTS = "RECEIVE_USER_SEARCH_RESULTS";
export const RECEIVE_SHARED_USERS = "RECEIVE_SHARED_USERS";


const receiveSharedUsers = (users) => ({
  type: RECEIVE_SHARED_USERS,
  users
});

export const fetchSharedWithUsers = (id) => (dispatch) => (
  fetchSharedUsers(id).then(
    (users) => dispatch(receiveSharedUsers(users))
  )
);

const receiveUserSearchResults = (users) => ({
  type: RECEIVE_USER_SEARCH_RESULTS,
  users
});

export const searchDatabase = (query) => (dispatch) => (
  searchUserDatabase(query).then(
    (users) => dispatch(receiveUserSearchResults(users))
  )
);




