import React from 'react';
import EditCardFormContainer from './edit_card/edit_card_form_container';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../../util/dnd';

const cardSource = {
  beginDrag(props) {
    return {
      cardId: props.cardId,
      listId: props.listId,
      updateCard: props.updateCard,
      title: props.title
    };
  }
};


const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});



class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { connectDragSource, isDragging, editCard, cardId, listId } = this.props;
    const card = this.props.card;
    return connectDragSource(
      <div className='card-item--container'>
        <h1 className='card-item--title'> {card.title} </h1>
        <EditCardFormContainer id={card.id} title={card.title}/>
      </div>
    );
  }
}

CardItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.CARD, cardSource, collect)(CardItem);