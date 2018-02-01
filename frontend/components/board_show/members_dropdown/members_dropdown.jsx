import React from 'react';

class MembersDropdown extends React.Component {
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
    if (this.node.contains(e.target) || e.target === null) {
      return;
    }
    this.handleClick();
  }



  render() {
    const sharedWith = this.props.sharedWith.map((user) => (
      <li> {user.username} </li>));
    
    const currentUsername = this.props.currentUser.username;
    const currentBoardId = this.props.currentBoardId;

    return (
      <div ref={node => { this.node = node; }} >
        <h1 onClick={this.handleClick} className='members-share--header'> Members </h1>
        {this.state.visible && (
          <div className='board-header--dropdown'>
            <h1 className='members-dropdown--header'>Owner</h1>
            <p> {currentUsername} </p>
            <h1 className='members-dropdown--header'>Contributors</h1>
            <ul>
              {sharedWith.length > 0 ? sharedWith : <p> You're flying solo here </p> }
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default MembersDropdown;