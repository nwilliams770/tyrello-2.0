import React from 'react';

class MembersDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      sharedWith: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    const currentBoardId = this.props.currentBoardId;
    this.props.fetchSharedWithUsers(currentBoardId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.sharedWith !== nextProps.sharedWith) {
      this.setState({ sharedWith: nextProps.sharedWith });
    }
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

    const sharedWith = Object.values(this.state.sharedWith).map(user => {
      return <p className='shared-with--item'> {user.username} </p>;
    });

    const owner = sharedWith[0];



    // let sharedWith;
    // if (this.props.sharedWithUsers) {
    //   sharedWith = this.props.sharedWithUsers.map((user) => (
    //   <li key={user.id}> {user.username} </li>));
    // }



    const currentUsername = this.props.currentUser.username;
    const currentBoardId = this.props.currentBoardId;

    return (
      <div ref={node => { this.node = node; }} >
        <h1 onClick={this.handleClick} className='members-share--header'> Members </h1>
        {this.state.visible && (
          <div className='board-header--dropdown'>
            <h1 className='members-dropdown--header'>Owner</h1>
              {owner}
            <h1 className='members-dropdown--header'>Contributors</h1>
              {sharedWith.splice(1)}
          </div>
        )}
      </div>
    );
  }
}

export default MembersDropdown;