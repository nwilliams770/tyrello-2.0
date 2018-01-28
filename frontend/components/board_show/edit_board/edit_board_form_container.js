import { connect } from 'react-redux';
import { editBoard } from '../../../actions/board_actions';

import EditBoardForm from './edit_board_form';

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.currentBoardName
});

const mapDispatchToProps = dispatch => ({
  editBoard: (params) => dispatch(editBoard(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBoardForm);