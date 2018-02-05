import React from 'react';

class SessionDropdown extends React.Component {
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
    const userImage = this.props.currentUser.username === 'Olenna-Tyrell' ? 
      <div onClick={this.handleClick} className='session-img--container'> <img src='http://res.cloudinary.com/nwilliams770/image/upload/c_scale,w_50/v1516744926/OlennaTyrell_vldewo.jpg' /> </div>
      : <div onClick={this.handleClick} className='session-img--container'> <img src='http://res.cloudinary.com/nwilliams770/image/upload/v1516744890/MargeryTyrell_wxjv0t.jpg' /> </div>;

    return (
      <div ref={node => { this.node = node; }} >
          {userImage}
        {this.state.visible && (
          <div className="session-dropdown--container">
            <h1 id='session-dropdown--header'> Hello, {this.props.currentUser.username}! </h1>
            <hr id="session-dropdown--underline" />
            <button id="logout--button"
            onClick={this.props.logout}>Sign out</button>
          </div>
        )}
      </div>
    );
  }
}

export default SessionDropdown;

{/* <div ref={node => { this.node = node; }} >
  <button className="toolbar-sess-btn" onClick={this.handleClick}>PIC</button>
  {this.state.visible && (
    <div className="session-dropdown-container">
      <div className='session-dropdown'>
        <div className='session-dropdown-header'>
          <button className='session-exit-button'
            onClick={this.handleClick}>
            &#10005;</button>
          <div className="current-user-header-copy">
            Welcome, {this.props.currentUser.username}!
                    </div>
        </div>
        <hr className="session-dropdown-underline" />
        <button className="logout-button"
          onClick={this.props.logout}>Logout</button>
      </div>
    </div>
  )}
</div> */}