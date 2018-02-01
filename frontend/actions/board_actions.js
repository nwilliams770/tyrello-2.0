import * as APIUtil from '../util/board_api_util';
import {createBoardShare} from '../util/board_share_api_util';

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const RECEIVE_UPDATED_BOARDS = "RECEIVE_UPDATED_BOARDS";
export const RECEIVE_SHARED_BOARDS = "RECEIVE_SHARED_BOARDS";


export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

export const receiveUpdatedBoards = boards => ({
  type: RECEIVE_UPDATED_BOARDS,
  boards
});

export const receiveSharedBoards = boards => ({
  type: RECEIVE_SHARED_BOARDS,
  boards
});


export const fetchBoards = () => dispatch => (
  APIUtil.fetchBoards().then(boards => (dispatch(receiveBoards(boards))))
);

export const fetchBoard = (id) => dispatch => (
  APIUtil.fetchBoard(id).then(board => (dispatch(receiveBoard(board))))
);

export const createBoard = (params) => dispatch => (
  APIUtil.createBoard(params).then(board => dispatch(receiveBoard(board)))
);

export const editBoard = (params) => dispatch => (
  APIUtil.editBoard(params).then(board => dispatch(receiveBoard(board)))
);

export const deleteBoard = (params) => dispatch => (
  APIUtil.deleteBoard(params).then(boards => dispatch(receiveUpdatedBoards(boards)))
);

export const shareBoard = (board_share) => dispatch => (
  createBoardShare(board_share).then(board => dispatch(receiveSharedBoards(board)))
);