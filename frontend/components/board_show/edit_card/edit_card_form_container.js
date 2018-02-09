import { connect } from 'react-redux';
import { editCard, deleteCard } from '../../../actions/card_actions';

import EditCardForm from './edit_card_form';

const mapDispatchToProps = dispatch => ({
  editCard: (id) => dispatch(editCard(id)),
  deleteCard: (id) => dispatch(deleteCard(id))
});

export default connect(
  null,
  mapDispatchToProps
)(EditCardForm);