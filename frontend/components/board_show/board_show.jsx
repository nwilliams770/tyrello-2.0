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
    this.props.fetchBoards().then(() => {
      console.log('BOARD **********');
      const currentBoardName = (this.props.boards[currentBoardId]['name']);
      document.title = `${currentBoardName} | Tyrello`;
    });


    // const currentBoardName = this.props.boards.forEach((board) => {
    //   console.log(board.id);
    //   console.log(board.name);
    //   }
    // );

  }

  render() {
    const lists = this.props.lists.map((list) => { 
      const cards = this.props.cards.byListId[list.id] === undefined ? [] : this.props.cards.byListId[list.id];
      return <ListItem key={list.id}
                       list={list}
                       cards={cards} />;
    });
      
    return (
      <div className='bg--signup-login'>
        <div className='photo-bg'>
          <ToolBar />
          <ul className='board-show--lists'>
            { lists }
            <NewListFormContainer />
          </ul>
        </div>
      </div>
    );
  }
}

export default BoardShow;