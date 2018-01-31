import React from 'react';
import { withRouter } from 'react-router-dom';

class DeleteListDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  this.handleDelete = this.handleDelete.bind(this);

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

  handleDelete(e) {
    e.preventDefault();
    const listId = this.props.id;
    this.props.deleteList({id: listId });   
  }

  render() {
    return (
      <div ref={node => { this.node = node; }} >
        <img src='http://res.cloudinary.com/nwilliams770/image/upload/v1517263639/three-dots-more-indicator_wfvjbm.svg'
            height='20px'
            width='20px'
            onClick={this.handleClick}
            id='delete-list-dropdown' />
        {this.state.visible && (
          <div id='delete-list-dropdown--container'>
            <p id='delete-list-dropdown--button' onClick={this.handleDelete}>Delete List</p>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(DeleteListDropdown);
