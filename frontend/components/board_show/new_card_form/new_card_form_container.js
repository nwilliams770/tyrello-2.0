import { connect } from 'react-redux';
import { createCard } from '../../../actions/card_actions';

import NewCardForm from './new_card_form';

const mapDispatchToProps = dispatch => ({
  createCard: (params) => dispatch(createCard(params))
});

export default connect(
  null,
  mapDispatchToProps
)(NewCardForm);