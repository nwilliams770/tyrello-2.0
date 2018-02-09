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
    this.props.editCard(params).then(this.props.onUpdate(this.state.title));
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


    return (
      <div ref={node => { this.node = node; }} >
        <h1 className='list-item--title' onClick={this.handleClick}> TEST </h1>
        {this.state.visible && (
          <div>
            <form id='edit-list--form'>
              <p id='delete-list-dropdown--button' onClick={this.handleDelete}>Delete Card</p>
              <input autoFocus id='edit-list--input' onChange={this.handleChange('title')} defaultValue='TEST' />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(EditCardForm);