import React from 'react';
import ToolBar from '../toolbar/toolbar_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Toolbar />
        <h1> Test </h1>
      </div>
    );
  }
}

export default BoardShow;