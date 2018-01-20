import React from 'react';
import { Link } from 'react-router-dom';
import SessionDropdown from './session_dropdown/session_dropdown_container';

class ToolBar extends React.Component {

  constructor(props) {
    super(props);
  }
  // personalBoards= { this.props.personalBoards }
  // sharedBoards= {this.props.sharedBoards }
  render() {
    return (
      <div className="toolbar-background">
        <div className="toolbar-container">
          <div className="boards-button-container">
            <div className="boards-dropdown">
              <Link to="/boards">
                <button className="boards-button" onClick={this.handleClick}>
                  <img src="http://res.cloudinary.com/nwilliams770/image/upload/c_scale,h_18/v1511726611/logo_gku6sb.png"
                    className="boards-btn-logo" />
                  <div className="boards-button-copy">
                    Boards
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <Link className="logo-container" to="/boards">
            <div className="logo">
            </div>
          </Link>
          <div className="right-buttons-container">
            <a className="icon-links" target="_blank" href="https://www.linkedin.com/in/nwilliams770/">
              <button className="right-buttons"><i className="right-buttons-icon fa fa-plus fa-2x" aria-hidden="true"></i></button>
            </a>
            <a className="icon-links" target="_blank" href="https://www.linkedin.com/in/nwilliams770/">
              <button className="right-buttons"><i className="right-buttons-icon fa fa-info fa-2x" aria-hidden="true"></i></button>
            </a>
            <a className="icon-links" target="_blank" href="https://www.linkedin.com/in/nwilliams770/">
              <button className="right-buttons"><i className="right-buttons-icon fa fa-bell-o fa-2x" aria-hidden="true"></i></button>
            </a>

            <SessionDropdown />
          </div>
        </div>
      </div>
    );
  }
}

export default ToolBar;