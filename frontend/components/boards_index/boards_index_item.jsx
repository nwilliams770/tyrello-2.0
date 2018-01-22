import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class BoardsIndexItem extends React.Component {
  render() {
    const { board } = this.props;
    const link = `/boards/${board.id}`;
    return (
      <Link to={link} className='board-index-item--link'>
          <div className='board-index-item--container'>
            <p className='board-index-item--name'> {board.name} </p>
          </div>
      </Link>
    );
  }
}


export default BoardsIndexItem; 