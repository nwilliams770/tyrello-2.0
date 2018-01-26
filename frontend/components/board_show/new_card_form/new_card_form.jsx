import React from 'react';
import { withRouter } from 'react-router-dom';

class NewCardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      visible: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const params = { title: this.state.title, list_id: this.props.listId };
    if (params.title === "") {
      return;
    }
    this.props.createCard(params);
    this.setState({ title: "" });
    this.handleClick();
    this.props.fetchBoard(this.props.id);
  }

  handleClick() {
    if (!this.state.visible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target) || e.target === null) {
      return;
    }

    this.handleClick();
    this.setState({ title: "" });
  }

  render() {
    return (
      <div ref={node => { this.node = node; }} >
        <div className='new-card--container' onClick={this.handleClick} >
          <p> Add a new card... </p>
        </div>
        {this.state.visible && (
          <div className='new-card-form--container'>
            <img src='http://res.cloudinary.com/nwilliams770/image/upload/c_scale,w_10/v1516671380/X-icon_ytjbme.svg'
              width='17px'
              height='17px'
              id='new-board-form--exit'
              onClick={this.handleClick} />
            <h1 id='new-card-form--header'> Add a card </h1>
            <hr id="board-form--underline" />
            <form id='new-card-form'>
              <textarea id='card-form--textarea' onChange={this.handleChange('title')}
                placeholder="Title"
                value={this.state.title} />
              <button id='card-form--submit' onClick={this.handleSubmit}>Add</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(NewCardForm);
