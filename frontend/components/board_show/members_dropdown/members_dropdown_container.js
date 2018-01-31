import { connect } from 'react-redux';

import MembersDropdown from './members_dropdown';

import { selectSharedWithUsers } from '../../../reducers/selectors';
import { fetchShared } from '../../../actions/user_actions';

const mapStateToProps = state => ({
  sharedWith: selectSharedWithUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchShared: (id) => dispatch(fetchShared(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersDropdown);