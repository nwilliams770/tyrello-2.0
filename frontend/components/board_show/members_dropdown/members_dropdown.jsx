import React from 'react';
import UserSearchContainer from './user_search/user_search_container';

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
    return (
      <div ref={node => { this.node = node; }} >
        <h1 onClick={this.handleClick} id='members--header'> Members </h1>
        {this.state.visible && (
          <div>
            <UserSearchContainer />
            <h1> current members </h1>
            <p> user search goes here </p>
          </div>
        )}
      </div>
    );
  }
}

export default MembersDropdown;