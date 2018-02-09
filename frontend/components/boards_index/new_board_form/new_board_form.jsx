import React from 'react';
import { withRouter } from 'react-router-dom';



class NewBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    const params = {name: this.state.name};
    if (params === "") {
      return;
    }
    this.props.createBoard(params)
      .then(newBoard => {
        this.setState({ name: "" });
        this.handleClick();
      });
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
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
    this.setState({ name: "" });
  }

  render() {
    return (
      <div ref={node => { this.node = node; }}>
        <div className='new-board--container' onClick={this.handleClick}>
          <p> Create a new board... </p>
        </div>
        
        {this.state.visible && (
          <div className='new-board-form--container'>
            <img src='http://res.cloudinary.com/nwilliams770/image/upload/c_scale,w_10/v1516671380/X-icon_ytjbme.svg'
                 width='17px'
                 height='17px' 
                 id='new-board-form--exit'
                 onClick={this.handleClick} />
            <h1 id='board-form--header'> Create board </h1>
            <hr id="board-form--underline" />
            <form>
              <label>
                <input autoFocus id="board-form--input"
                  onChange={this.handleChange('name')}
                  placeholder="Name"
                  value={this.state.name} />
              </label>
              <button id="board-form--submit" onClick={this.handleSubmit}>Create</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(NewBoardForm);