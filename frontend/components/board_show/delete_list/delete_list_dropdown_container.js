import { connect } from 'react-redux';
import { deleteList } from '../../../actions/list_actions';

import DeleteListDropdown from './delete_list_dropdown';

const mapDispatchToProps = dispatch => ({
  deleteList: (params) => dispatch(deleteList(params))
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteListDropdown);