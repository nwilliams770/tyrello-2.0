import React from 'react';
import ToolBar from '../toolbar/toolbar_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Tyrello - Boards";
    console.log(this.props.match);
    this.props.fetchLists(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <ToolBar />
        <h1> Test </h1>
      </div>
    );
  }
}

export default BoardShow;