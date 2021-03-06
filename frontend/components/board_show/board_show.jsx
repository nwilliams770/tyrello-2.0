import React from 'react';
import ToolBar from '../toolbar/toolbar_container';
import ListItem from './list_item';
import NewListFormContainer from './new_list_form/new_list_form_container';
import EditBoardFormContainer from './edit_board/edit_board_form_container';
import MembersDropdownContainer from './members_dropdown/members_dropdown_container';
import UserSearchContainer from './user_search/user_search_container';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    currentBoardName: ''
  };

  this.handleDelete = this.handleDelete.bind(this);
  this.updateCard = this.updateCard.bind(this);
  }

  updateCard(cardId, listId, title) {
    let card = {
      id: cardId,
      list_id: listId,
      title: title,
    };
    this.props.editCard(card);
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

  handleBoardUpdate (updatedName) {
    this.setState({currentBoardName: updatedName});
  }

  handleDelete (e) {
    e.preventDefault();
    const currentBoardId = this.props.match.params.id;
    this.props.deleteBoard(currentBoardId).then(this.props.history.push("/boards"));    

  }

  render() {
    const currentBoard = this.props.boards[this.props.match.params.id];
    const currentBoardName = this.state.currentBoardName;
    const currentBoardId = this.props.match.params.id;
  
    const lists = this.props.lists.map((list) => { 
      const cards = this.props.cards.byListId[list.id] === undefined ? [] : this.props.cards.byListId[list.id];
      return <ListItem key={list.id}
                       list={list}
                       cards={cards}
                       listId={list.id}
                       updateCard={this.updateCard} />;
    });
      
    return (
      <div className='bg--signup-login'>
        <div className='photo-bg'>
          <ToolBar />
          <div id='board-show--header-container'>
              <div className='board-show-header--left-buttons'>
              <EditBoardFormContainer name= {currentBoardName} 
                                      currentBoardId = {currentBoardId} 
                                      onUpdate= { this.handleBoardUpdate.bind(this) } />
              <div id='delete-board--container'>
                <img src='http://res.cloudinary.com/nwilliams770/image/upload/v1516671380/X-icon_ytjbme.svg'
                      width='20px'
                      height='20px'
                      onClick={this.handleDelete}
                      id='delete-board--icon' />
                <p id='delete-board--notify' > Delete Board </p>
              </div>
              </div>


              <div className='board-show-header--right-buttons'> 
              <MembersDropdownContainer currentBoardId={currentBoardId} />
              <UserSearchContainer currentBoardId={currentBoardId}/>
              </div>

          </div>
          <ul className='board-show--lists slide-up-fade-in--boards'>
            { lists }
            <NewListFormContainer />
          </ul>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(BoardShow);