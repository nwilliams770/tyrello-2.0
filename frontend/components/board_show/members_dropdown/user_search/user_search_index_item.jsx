import React from 'react';

class UserSearchIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = props.currentUser;
    this.user = props.user;
    // this.state = { following: this.user.followed_by_current_user };
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


    return (
      <li>
        <img src={this.user.img_url} />
        <p>{"@" + this.user.username}</p>
      </li>
    );
  }
}

export default UserSearchIndexItem;
