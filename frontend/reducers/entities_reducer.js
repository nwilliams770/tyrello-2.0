import { combineReducers } from 'redux';

import boardsReducer from './boards_reducer';
import listsReducer from './lists_reducer';

export default combineReducers({
  boards: boardsReducer,
  lists: listsReducer
});