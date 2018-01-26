import React from 'react';
import CardItem from './card_item';
import NewCardFormContainer from './new_card_form/new_card_form_container';
import { keys } from 'lodash';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.list;
    const cardItems = this.props.cards.map(card => {
      return <CardItem key={card.id} card={card} />;
    });
    
    return (
      
      <div className='list-item--container'>
        <h1 className='list-item--title'> {list.title} </h1>
        {cardItems}
        <NewCardFormContainer listId={list.id} />
      </div>
    );
  }
}

export default ListItem;