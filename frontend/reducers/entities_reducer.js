import { combineReducers } from 'redux';

import boardsReducer from './boards_reducer';

export default combineReducers({
  boards: boardsReducer
});