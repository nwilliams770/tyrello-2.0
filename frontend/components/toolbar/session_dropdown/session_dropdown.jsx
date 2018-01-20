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

  // logout2 () {
  //   this.props.logout().then(() => this.props.history.push("/"));
  // }


  render() {
    return (

      <div ref={node => { this.node = node; }} >
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
      </div>
    );
  }
}

export default SessionDropdown;
