import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchLists } from '../../actions/list_actions';
import { selectLists, selectPersonalBoards } from '../../reducers/selectors';


import BoardShow from './board_show';


const mapStateToProps = state => ({
  lists: selectLists(state),
  boards: selectPersonalBoards(state)
});

const mapDispatchToProps = dispatch => ({
  fetchLists: (id) => dispatch(fetchLists(id))
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow));
