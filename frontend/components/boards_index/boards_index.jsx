import React from 'react';
import { Link } from 'react-router-dom';

import BoardsIndexItem from './boards_index_item';
import ToolBarContainer from '../toolbar/toolbar_container';
import NewBoardFormContainer from './new_board_form/new_board_form_container';



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
      <div className='bg--signup-login'>
        <div className='photo-bg'>
          <ToolBarContainer />
          <div className='header--personal'>
            <img src='http://res.cloudinary.com/nwilliams770/image/upload/v1516661865/user-black-close-up-shape_aog0gg.svg'
                 height='25px'
                 width='25px'
                 className='board--icons' />
            <h1> Personal Boards </h1>
          </div>
          <div className='personal-boards--container'>
            <ul>
              {personalBoards}
              {/* <NewBoardFormContainer /> */}
            </ul>
          </div>

          <div className='header--shared'>
            <img src='http://res.cloudinary.com/nwilliams770/image/upload/v1516661862/multiple-users-silhouette_erlndp.svg'
                 height='25px'
                 width='25px'
                 className='board--icons' />

            <h1> Shared Boards </h1>
          </div>
          <div className='shared-boards--container'>
            <ul>
              {sharedBoards}
            </ul>
          </div>
          
        </div>
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