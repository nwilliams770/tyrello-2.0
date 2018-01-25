import React from 'react';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const card = this.props.card;
    console.log('card --------------------');
    console.log(card);
    return (
      <div>
        <h1> {card.title} </h1>
      </div>
    );
  }
}

export default CardItem;