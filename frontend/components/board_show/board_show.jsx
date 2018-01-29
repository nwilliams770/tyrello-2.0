import React from 'react';
import ToolBar from '../toolbar/toolbar_container';
import ListItem from './list_item';
import NewListFormContainer from './new_list_form/new_list_form_container';
import EditBoardFormContainer from './edit_board/edit_board_form_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    currentBoardName: ''
  };
  }

  componentDidMount() {
    const currentBoardId = this.props.match.params.id;

    this.props.fetchLists(currentBoardId);
    this.props.fetchCards(currentBoardId);  
    this.props.fetchBoards()
      .then(() => {
        const currentBoardName = (this.props.boards[currentBoardId]['name']);
        document.title = `${currentBoardName} | Tyrello`;
    }).then(() => this.setState({ currentBoardName: this.props.boards[currentBoardId]['name']}));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {

      const newBoardId = nextProps.match.params.id;
      this.props.fetchLists(newBoardId);
      this.props.fetchCards(newBoardId);
      this.props.fetchBoards()
        .then(() => {
          const currentBoardName = (this.props.boards[newBoardId]['name']);
          document.title = `${currentBoardName} | Tyrello`;
        }).then(() => this.setState({ currentBoardName: this.props.boards[newBoardId]['name'] }));
    }
  }

  handleUpdate (updatedName) {
    this.setState({currentBoardName: updatedName});
  }



  render() {
    const currentBoardId = this.props.match.params.id;
    const currentBoardName = this.state.currentBoardName;

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
          <EditBoardFormContainer name= {currentBoardName} 
                                  currentBoardId = {currentBoardId} 
                                  onUpdate= { this.handleUpdate.bind(this) } />
          <ul className='board-show--lists slide-up-fade-in--boards'>
            { lists }
            <NewListFormContainer />
          </ul>
        </div>
      </div>
    );
  }
}

export default BoardShow;