import { connect } from 'react-redux';
import UserSearch from './user_search';
import { searchDatabase } from '../../../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    userSearchResults: state.entities.userSearchResults,
});

const mapDispatchToProps = (dispatch) => ({
  searchDatabase: (query) => dispatch(searchDatabase(query))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSearch));