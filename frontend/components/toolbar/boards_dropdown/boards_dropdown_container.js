import { connect } from 'react-redux';

import BoardsDropdown from "./boards_dropdown";

import { fetchBoards } from '../../../actions/board_actions';
import { selectPersonalBoards, selectSharedBoards } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  personalBoards: selectPersonalBoards(state),
  sharedBoards: selectSharedBoards(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsDropdown);