import { connect } from 'react-redux';

import MembersDropdown from './members_dropdown';

import { selectSharedWithUsers } from '../../../reducers/selectors';
import { fetchShared } from '../../../actions/user_actions';

const mapStateToProps = state => ({
  sharedWith: Object.values(state.entities.sharedWith)
});


export default connect(
  mapStateToProps,
  null
)(MembersDropdown);