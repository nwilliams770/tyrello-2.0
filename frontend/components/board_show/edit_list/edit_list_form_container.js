import { connect } from 'react-redux';
import { editList } from '../../../actions/list_actions';

import EditListForm from './edit_list_form';

const mapDispatchToProps = dispatch => ({
  editList: (params) => dispatch(editList(params))
});

export default connect(
  null,
  mapDispatchToProps
)(EditListForm);