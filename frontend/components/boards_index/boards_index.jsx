import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import BoardsIndexItem from './boards_index_item';
import ToolBarContainer from '../toolbar/toolbar_container';
import NewBoardFormContainer from './new_board_form/new_board_form_container';



class BoardsIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBoards();
    
    document.title = 'Boards | Tyrello';
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
          <ReactCSSTransitionGroup
            component="div"
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <ul className='boards--list slide-up-fade-in--boards'>
              {personalBoards}
               <NewBoardFormContainer />
            </ul>
          </ReactCSSTransitionGroup>
         

          <div className='header--shared'>
            <img src='http://res.cloudinary.com/nwilliams770/image/upload/v1516661862/multiple-users-silhouette_erlndp.svg'
                 height='25px'
                 width='25px'
                 className='board--icons' />

            <h1> Shared Boards </h1>
          </div>
          <ul className='boards--list slide-up-fade-in--boards'>
            {sharedBoards}
          </ul>
        </div>
      </div>
    );
  }
}

export default BoardsIndex;