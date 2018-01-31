import { values, keys } from 'lodash';

export const selectPersonalBoards = (state) => {
  let personalIds = values(state.entities.boards.allIds.personal);
  let personalsUnfiltered = personalIds.map(id => (state.entities.boards.byId[id]));
  return personalsUnfiltered.filter(board => !(board.shared));
};

export const selectSharedBoards = (state) => {
  let sharedIds = values(state.entities.boards.allIds.shared);
  let sharedWiths = sharedIds.map(id => (state.entities.boards.byId[id]));
  let shared = values(state.entities.boards.allIds.personal)
                .map(id => (state.entities.boards.byId[id]))
                .filter(board => board.shared);
  return shared.concat(sharedWiths);
};


export const selectLists = (state) => {
  let listIds = values(state.entities.lists.allIds);
  let lists = listIds.map(id => (state.entities.lists.byId[id]));
  return lists;
};

// export const selectCards = (state) => {
//   let caArdIds = values(state.entities.cards.allListIds);
//   let cards = {};
  
// }
