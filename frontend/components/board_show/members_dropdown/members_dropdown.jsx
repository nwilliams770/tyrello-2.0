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
    

    return (
      <div ref={node => { this.node = node; }} >
        <h1 onClick={this.handleClick} className='members-share--header'> Members </h1>
        {this.state.visible && (
          <ul>
            {sharedWith}
            <h1> Test </h1>
          </ul>
        )}
      </div>
    );
  }
}

export default MembersDropdown;