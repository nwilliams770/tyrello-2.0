import { connect } from 'react-redux';
import { editBoard } from '../../../actions/board_actions';

import EditBoardForm from './edit_board_form';

const mapDispatchToProps = dispatch => ({
  editBoard: (params) => dispatch(editBoard(params))
});

export default connect(
  null,
  mapDispatchToProps
)(EditBoardForm);