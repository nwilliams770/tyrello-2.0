import React from 'react';
import { Link } from 'react-router-dom';
import SessionDropdown from './session_dropdown/session_dropdown_container';
import BoardsDropdown from './boards_dropdown/boards_dropdown_container';
import InfoDropdown from './info_dropdown/info_dropdown';

class ToolBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

        <div className="toolbar--container">
          <div className="boards--dropdown">
            <BoardsDropdown />
          </div>

          <div className='logo--link'>
            <Link to='/boards'>
              <img src='http://res.cloudinary.com/nwilliams770/image/upload/v1516654326/Logo_wjhvtl.svg'
                   height='40px'
                   width='40px'
                   className='toolbar--logo' />
            </Link>
          </div>
         
          <div className="right-buttons--container">
            <div id='info-dropdown'>
              <InfoDropdown />
            </div>
            <SessionDropdown />
          </div>
        </div>
    );
  }
}

export default ToolBar;