import React from 'react';
import CardItem from './card_item';
import NewCardFormContainer from './new_card_form/new_card_form_container';
import EditListFormContainer from './edit_list/edit_list_form_container';
import { keys } from 'lodash';


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
      return <CardItem key={card.id} card={card} />;
    });
    
    return (
      
      <div className='list-item--container'>
        <EditListFormContainer title={listTitle} 
                               id={list.id}
                               onUpdate={ this.handleListUpdate.bind(this) } />
        {cardItems}
        <NewCardFormContainer listId={list.id} />
      </div>
    );
  }
}

export default ListItem;