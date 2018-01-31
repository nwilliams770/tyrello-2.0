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

  // handleClick(action) {
  //   return (e) => {
  //     e.preventDefault();
  //     if (action === "follow") {
  //       let oppositeCurrentFollowing = !this.state.following;
  //       this.setState({ following: oppositeCurrentFollowing }, () => {
  //         this.followUser(this.user.id, this.currentUser.id, this.props.feedType, this.props.profileUser);
  //         // this.currentUser.followees += 1;
  //         // this.updateCurrentUser(this.currentUser);
  //       });
  //     } else {
  //       let oppositeCurrentFollowing = !this.state.following;
  //       this.setState({ following: oppositeCurrentFollowing }, () => {
  //         this.unfollowUser(this.user.id, this.currentUser.id, this.props.feedType, this.props.profileUser);
  //         // this.currentUser.followees -= 1;
  //         // this.updateCurrentUser(this.currentUser);
  //       });
  //     }
  //   };
  // }

  render() {
  
    console.log(this.props);
    return (
      <li onClick={this.handleClick}>

          <img src={this.user.img_url} />
          <p>{"@" + this.user.username}</p>

      </li>
    );
  }
}

export default UserSearchIndexItem;
