import { combineReducers } from 'redux';

import boardsReducer from './boards_reducer';
import listsReducer from './lists_reducer';
import cardsReducer from './cards_reducer';
import userSearchReducer from './user_search_reducer';
import sharedWithReducer from './shared_with_reducer';


export default combineReducers({
  boards: boardsReducer,
  lists: listsReducer,
  cards: cardsReducer,
  userSearchResults: userSearchReducer,
  sharedWith: sharedWithReducer
});