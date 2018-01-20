import React from 'react';
import { Link } from 'react-router-dom';

import BoardsIndexItem from './boards_index_item';
import ToolBarContainer from '../toolbar/toolbar_container';


class BoardsIndex extends React.Component {
  componentDidMount() {
    document.title = "Tyrello - Boards";
    this.props.fetchBoards();
  }

  render() {
    const personalBoards = this.props.personalBoards.map((board) => (
      <BoardsIndexItem key={board.id} board={board} />
    ));

    const sharedBoards = this.props.sharedBoards.map((board) => (
      <BoardsIndexItem key={board.id} board={board} />
    ));
    
    return (
      <div>
        <h1> test </h1>
        <ul>
          { personalBoards}
          {sharedBoards}
        </ul>
      </div>

      // <div className="bg-box2">
      //   <ToolBarContainer
      //     className="entire-toolbar" />
      //   <div className="personal-header-bg">
      //     <div className="personal-header-container">
      //       <i className="personal-icon fa fa-user fa-2x" aria-hidden="true"></i>
      //       <h1 className="boards-header">Personal Boards</h1>
      //     </div>
      //   </div>
      //   <div className="boards-list-container">
      //     <ul className="boards-list">
      //       {personalBoards}
      //       <NewBoardFormContainer />
      //     </ul>
      //   </div>
      //   <div className="shared-boards">
      //     <div className="shared-header-bg">
      //       <div className="shared-header-container">
      //         <i className="personal-icon fa fa-users fa-2x" aria-hidden="true"></i>
      //         <h1 className="boards-header">Shared Boards</h1>
      //       </div>
      //     </div>
      //     <div className="shared-boards-list-container">
      //       <ul className="boards-list">
      //         {sharedBoards}
      //       </ul>
      //     </div>
      //   </div>
      // </div>
    );
  }

}

export default BoardsIndex;