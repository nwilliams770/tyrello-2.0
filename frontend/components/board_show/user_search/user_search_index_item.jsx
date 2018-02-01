import React from 'react';

class UserSearchIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = props.currentUser;
    this.user = props.user;
    this.shareBoard = props.shareBoard;
    this.handleClick = this.handleClick.bind(this);
    this.userId = props.userId;
    this.currentBoardId = props.currentBoardId;
  }

  handleClick(e) {
    e.preventDefault();
    const params = {board_id: this.currentBoardId, contributor_id: this.userId};
    this.props.shareBoard(params);
  }

  render() {
    return (
      <li onClick={this.handleClick}>

          <img src={this.user.img_url} />
          <p>{"@" + this.user.username}</p>

      </li>
    );
  }
}

export default UserSearchIndexItem;
