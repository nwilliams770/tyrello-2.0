import React from 'react';
import { withRouter } from 'react-router-dom';

class EditCardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      title: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    this.setState({ title: this.props.title });
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.title !== nextProps.title) {
      this.setState({ title: nextProps.title });
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.state.title !== nextProps;
  }

  handleDelete(e) {
    e.preventDefault();
    const cardId = this.props.id;
    this.props.deleteCard(cardId);
  }


  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit() {
    const params = { title: this.state.title, id: this.props.id };
    if (params.title === "") {
      return;
    }
    this.props.editCard(params);
    this.handleClick();
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

    if (this.state.title !== this.props.title) {
      this.handleSubmit().handleClick();
    } else {
      this.handleClick();
    }

  }

  render() {
    const title = this.props.title;    

    return (
      <div ref={node => { this.node = node; }} >
        <img src='http://res.cloudinary.com/nwilliams770/image/upload/v1518143644/pencil-edit-button_xosvld.svg'
                  height='20px'
                  width='20px'
                  onClick={this.handleClick}
                  id='edit-card--button' />
        {this.state.visible && (
          <div className='edit-card--container'>
            <img src='http://res.cloudinary.com/nwilliams770/image/upload/c_scale,w_10/v1516671380/X-icon_ytjbme.svg'
              width='17px'
              height='17px'
              id='new-board-form--exit'
              onClick={this.handleClick} />
            <h1 id='new-card-form--header'> Edit card </h1>
            <hr id="board-form--underline" />
            <form id='new-card-form'>
              <textarea autoFocus id='card-form--textarea' 
                                  onChange={this.handleChange('title')}
                                  defaultValue={title} />
              <div className='edit-card--buttons'>
                <button className='edit-card--submit' onClick={this.handleSubmit}>Update</button>
                <button className='edit-card--submit' onClick={this.handleDelete}>Delete</button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(EditCardForm);