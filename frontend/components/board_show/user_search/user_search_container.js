import { connect } from 'react-redux';
import UserSearch from './user_search';
import { searchDatabase } from '../../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import { shareBoard } from '../../../actions/board_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    userSearchResults: state.entities.userSearchResults,
});

const mapDispatchToProps = (dispatch) => ({
  searchDatabase: (query) => dispatch(searchDatabase(query)),
  shareBoard: (boardShare) => dispatch(shareBoard(boardShare))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSearch));