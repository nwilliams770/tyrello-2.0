import React from 'react';
import { withRouter } from 'react-router-dom';

class EditBoardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      name: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    this.setState({name: this.props.name });
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.name !== nextProps.name) {
      this.setState({ name: nextProps.name });
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.state.name !== nextProps;
  }


  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const params = { name: this.state.name, id: this.props.currentBoardId};
    if (params.name === "") {
      return;
    }
    this.props.editBoard(params).then(this.props.onUpdate(this.state.name));
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
    this.handleClick();
  }

  render() {
    const name = this.props.name;

    return (
      <div ref={node => { this.node = node; }} >
        <h1 id='edit-board--header' onClick={this.handleClick}> {name} </h1>
        {this.state.visible && (
          <div id='edit-board-form--container'>
            <img src='http://res.cloudinary.com/nwilliams770/image/upload/c_scale,w_10/v1516671380/X-icon_ytjbme.svg'
              width='17px'
              height='17px'
              id='new-board-form--exit'
              onClick={this.handleClick} />
            <h1 id='list-form--header'> Rename board </h1>
            <hr id="board-form--underline" />
            <form>
              <input id='list-form--input'
                onChange={this.handleChange('name')}
                defaultValue={name} />
              <button id='list-form--submit' onClick={this.handleSubmit}>Rename</button>
            </form>
          </div>
        )}
      </div> 
    );
  }
}

export default withRouter(EditBoardForm);