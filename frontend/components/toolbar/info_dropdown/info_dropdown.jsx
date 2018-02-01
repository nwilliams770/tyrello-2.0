import React from 'react';

class InfoDropdown extends React.Component {
  constructor() {
    super();
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
    return (
      <div ref = { node => { this.node = node; } } >
        <button className='info-bttn' onClick={this.handleClick}>
          <img src='http://res.cloudinary.com/nwilliams770/image/upload/v1516655735/info_apeplu.svg'
            height='20px'
            width='20px' />
        </button>

        {this.state.visible && (
          <div className='info-dropdown--container'>
            <h1 id='info-dropdown--header'> Welcome to Tyrello!</h1>
            <hr id="session-dropdown--underline" />
            <p className='info-body'>   A Tyrello board is a list of lists, filled with cards, to help you break down daunting projects
                into tasks. </p>
                
              <p className='info-body-btm'> Happy exploring! </p>
            <p> Created by <a target='_blank' id='github--link' href='https://github.com/nwilliams770'>Nicholas Williams</a> </p>
          </div>
        )}
      </div>
    );
  }
}

export default InfoDropdown;