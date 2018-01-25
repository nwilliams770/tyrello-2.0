import React from 'react';
import ToolBar from '../toolbar/toolbar_container';
import ListItem from './list_item';
import NewListFormContainer from './new_list_form/new_list_form_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const currentBoardId = this.props.match.params.id;

    this.props.fetchLists(currentBoardId);
    this.props.fetchCards(currentBoardId);  
    this.props.fetchBoards().then(() => {console.log(this.props)})
  }

  render() {
    const lists = this.props.lists.map((list) => { 
      const cards = this.props.cards.byListId[list.id] === undefined ? [] : this.props.cards.byListId[list.id];
      return <ListItem key={list.id}
                       list={list}
                       cards={cards} />;
    });
      
    return (
      <div>
        <ToolBar />
        <ul>
          { lists }
        </ul>
        <NewListFormContainer />
      </div>
    );
  }
}

export default BoardShow;