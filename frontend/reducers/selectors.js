import { values, keys } from 'lodash';

export const selectPersonalBoards = (state) => {
  let personalIds = values(state.entities.boards.allIds.personal);
  return personalIds.map(id => (state.entities.boards.byId[id]));
};

export const selectSharedBoards = (state) => {
  let sharedIds = values(state.entities.boards.allIds.shared);
  return sharedIds.map(id => (state.entities.boards.byId[id]));
};


export const selectLists = (state) => {
  let listIds = state.entities.lists.allIds;
  let lists = listIds.map(id => (state.entities.lists.byId[id]));
  return lists;
};