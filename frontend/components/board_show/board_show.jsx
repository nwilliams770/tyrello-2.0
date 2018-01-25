import React from 'react';
import ToolBar from '../toolbar/toolbar_container';
import ListItem from './list_item';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const currentBoardId = this.props.match.params.id;

    this.props.fetchLists(currentBoardId);
    this.props.fetchCards(currentBoardId);  
    this.props.fetchBoards().then(() => {console.log(this.props)})

    console.log('yo props -------------------');
    console.log(this.props);
  }

  render() {
    const lists = this.props.lists.map(list => (<li> {list.title} </li>));


    const lists3 = this.props.lists.map((list) => { 
      const cards = this.props.cards.byListId[list.id];
      return <ListItem />;
    });
    // const lists2 = this.props.lists.map((list) => {
    //   if (this.props.cards.byListId[list.id]) {

    //     const cards = this.props.cards.byListId[list.id].map(cardId => (this.props.cards.byListId[cardId]));

    //     return console.log(cards);
        // return <ListItem key={list.id}
        //   list={list}
        //   cards={cards}
      
        //   fetchBoard={this.props.fetchBoard} />;
    //   }
    // });
      
    return (
      <div>
        <ToolBar />
        <ul>
          { lists }
          { lists3 }
        </ul>
      </div>
    );
  }
}

export default BoardShow;