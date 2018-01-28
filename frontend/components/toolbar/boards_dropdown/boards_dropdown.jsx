import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class BoardsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleClick() {
    if (!this.state.visible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }
  render() {
    const passedPersonalBoards = this.props.personalBoards.map((board) => {
      let link = `/boards/${board.id}`;
      return (
        <Link to={link} className="boards-dropdown--items" key={board.id}>
          {board.name}
        </Link>
      );
    });

    const passedSharedBoards = this.props.sharedBoards.map((board) => {
      let link = `/boards/${board.id}`;
      return (
        <Link to={link} className="boards-dropdown--items" >
          {board.name}
        </Link>
      );
    });
    return (
      <div ref={node => { this.node = node; }} >
        <button className="boards-button" onClick={this.handleClick}>
          <img src="http://res.cloudinary.com/nwilliams770/image/upload/v1516651830/Boards_Icon_jiple0.svg"
            height="25px"
            width="25px" />
          Boards
        </button>

        {this.state.visible && (
        <div className='boards-dropdown--container'>
          <div className='boardsdropdown--headers'>
              <img src='http://res.cloudinary.com/nwilliams770/image/upload/v1516661865/user-black-close-up-shape_aog0gg.svg'
                height='25px'
                width='25px'
                className='dropdown--icons' />
              <p> Personal Boards </p>
          </div>
          <ul className='boards-dropdown--boards-lists'>
            {passedPersonalBoards}
          </ul>

            <div className='boardsdropdown--headers'>
              <img src='http://res.cloudinary.com/nwilliams770/image/upload/v1516661862/multiple-users-silhouette_erlndp.svg'
                height='25px'
                width='25px'
                className='dropdown--icons' />
              <p> Shared Boards </p>
          </div>
            <ul className='boards-dropdown--boards-lists'>
            {passedSharedBoards}
          </ul>
        </div>
        )}
      </div>
    );
  }
}

export default withRouter(BoardsDropdown);
