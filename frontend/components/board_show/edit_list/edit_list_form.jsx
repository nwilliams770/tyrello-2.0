import React from 'react';
import { withRouter } from 'react-router-dom';

class EditListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      title: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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


  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit() {
    const params = { title: this.state.title, id: this.props.id };
    if (params.title === "") {
      return;
    }
    this.props.editList(params).then(this.props.onUpdate(this.state.title));
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

    if (this.state.title !== this.props.title ) {
      this.handleSubmit().handleClick();
    } else {
      this.handleClick();
    }
    
  }

  render() {
    const title = this.props.title;

    return (
      <div ref={node => { this.node = node; }} >
        <h1 className='list-item--title' onClick={this.handleClick}> {title} </h1>
        {this.state.visible && (
          <div>
            <form id='edit-list--form'>
              <input autoFocus id='edit-list--input' onChange={this.handleChange('title')} defaultValue={title} />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(EditListForm);