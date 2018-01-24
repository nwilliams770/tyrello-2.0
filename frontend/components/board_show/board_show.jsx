import React from 'react';
import ToolBar from '../toolbar/toolbar_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Tyrello - Boards";
    this.props.fetchLists(this.props.match.params.id);
  }

  render() {
    const lists = this.props.lists.map(list => (<li> {list.title} </li>));
    return (
      <div>
        <ToolBar />
        <h1> Test </h1>
        <ul>
          { lists }
        </ul>
      </div>
    );
  }
}

export default BoardShow;