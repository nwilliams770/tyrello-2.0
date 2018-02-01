import React from 'react';
import UserSearchIndexItem from './user_search_index_item';

export default ({ searchItems, firstTime, searchVal, currentUser,
   currentBoardId, shareBoard, fetchShared, handleShare }) => {
  if (searchVal === "") return (<ul className="UserSearchIndex"></ul>);

  let listItems;
 
  if (searchItems.length !== 0) {
    listItems =
      searchItems.map(
        (user) => (<UserSearchIndexItem currentUser={currentUser}
          user={user} userId={user.id} currentBoardId={currentBoardId} key={user.id}
           shareBoard={shareBoard} fetchShared={fetchShared} handleShare={handleShare} />)
      );
  } else if (firstTime === false) {
    listItems =
      <li>No matchings users</li>;
  }
  return (
    <ul className="UserSearchIndex">
      {listItems}
    </ul>
  );
};
