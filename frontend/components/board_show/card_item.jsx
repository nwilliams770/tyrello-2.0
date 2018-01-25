import React from 'react';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const card = this.props.card;
    return (
      <div className='card-item--container'>
        <h1 className='card-item--title'> {card.title} </h1>
      </div>
    );
  }
}

export default CardItem;