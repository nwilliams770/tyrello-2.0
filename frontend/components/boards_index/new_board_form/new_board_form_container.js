import { connect } from 'react-redux';
import { createBoard } from '../../../actions/board_actions';

import NewBoardForm from './new_board_form';

const mapDispatchToProps = dispatch => ({
  createBoard: (params) => dispatch(createBoard(params))
});

export default connect(
  null,
  mapDispatchToProps
)(NewBoardForm);
