import React from 'react';
import CardItem from './card_item';
import NewCardFormContainer from './new_card_form/new_card_form_container';
import EditListFormContainer from './edit_list/edit_list_form_container';
import DeleteListDropdownContainer from './delete_list/delete_list_dropdown_container';
import { keys } from 'lodash';

import { DropTarget } from 'react-dnd';
import PropTypes from 'prop-types';
import { ItemTypes } from '../../util/dnd';

const updateCard = (item, newListId) => {
  item.updateCard(item.cardId, newListId, item.title);
};

const listTarget = {
  drop(props, monitor) {
    updateCard(monitor.getItem(), props.listId);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    item: monitor.getItem(),
  };
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    this.setState({title: this.props.list.title });
  }


  handleListUpdate (updatedTitle) {
    this.setState({title: updatedTitle});
  }



  render() {
    const list = this.props.list;
    const listTitle = this.state.title;

    const cardItems = this.props.cards.map(card => {
      return <CardItem key={card.id} 
                       card={card} 
                       cardId={card.id} 
                       title={card.title}
                       listId={this.props.listId}
                       updateCard={this.props.updateCard} />;
    });

    const { connectDropTarget, isOver, item } = this.props;
    
    return connectDropTarget(
      <div className='list-item--container'>
        <div className='list-item-header--container'>
          <EditListFormContainer title={listTitle}
            id={list.id}
            onUpdate={this.handleListUpdate.bind(this)} />
          <DeleteListDropdownContainer id={list.id} />
        </div>
        {cardItems}
        <NewCardFormContainer listId={list.id} />
      </div>
    );
  }
}

ListItem.propTypes = {
  listId: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.CARD, listTarget, collect)(ListItem);