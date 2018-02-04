import { connect } from 'react-redux';

import MembersDropdown from './members_dropdown';

import { selectSharedWithUsers } from '../../../reducers/selectors';
import { fetchSharedWithUsers } from '../../../actions/user_actions';

const mapStateToProps = state => ({
  sharedWith: selectSharedWithUsers(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchSharedWithUsers: (id) => dispatch(fetchSharedWithUsers(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersDropdown);