import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class BoardsIndexItem extends React.Component {
  render() {
    const { board } = this.props;
    const link = `/boards/${board.id}`;
    return (
      <li className="boards-list-item">
        <Link to={link} className="boards-list-item-link">
          <button className="boards-list-item-button">
            <div className="boards-name">
              {board.name}
            </div>
          </button>
        </Link>
      </li>
    );
  }
}


export default BoardsIndexItem; 