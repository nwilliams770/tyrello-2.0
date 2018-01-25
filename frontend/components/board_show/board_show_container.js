import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchLists } from '../../actions/list_actions';
import { fetchCards } from '../../actions/card_actions';
import { fetchBoards } from '../../actions/board_actions';
import { selectLists, selectPersonalBoards} from '../../reducers/selectors';


import BoardShow from './board_show';

// boards: selectPersonalBoards(state),

const mapStateToProps = state => ({
  lists: selectLists(state),
  boards: state.entities.boards.byId,
  cards: state.entities.cards
});

const mapDispatchToProps = dispatch => ({
  fetchLists: (id) => dispatch(fetchLists(id)),
  fetchCards: (id) => dispatch(fetchCards(id)),
  fetchBoards: (id) => dispatch(fetchBoards())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow));
