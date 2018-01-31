import { combineReducers } from 'redux';

import boardsReducer from './boards_reducer';
import listsReducer from './lists_reducer';
import cardsReducer from './cards_reducer';
import userSearchReducer from './user_search_reducer';


export default combineReducers({
  boards: boardsReducer,
  lists: listsReducer,
  cards: cardsReducer,
  userSearchResults: userSearchReducer
});