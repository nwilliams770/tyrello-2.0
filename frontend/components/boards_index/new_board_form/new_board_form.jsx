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
    // this.renderErrors = this.renderErrors.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }


  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const params = this.state.name;
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map(err =>
          <li> err </li>)}
      </ul>
    );
  }

  render() {
    return (
      <div className="board-form-parent" ref={node => { this.node = node; }} >
        <li className="create-board">
          <button onClick={this.handleClick} className="create-board-button">
            <div className="create-board-copy">
              Create a new board...
            </div>
          </button>
        </li>
        {this.state.visible && (
          <div className='board-form-container'>
            <div className="board-form-header">
              <div className="board-form-header-copy">
                Create Board
              </div>
              <button className="form-exit-button" onClick={this.handleClick}>&#10005;</button>
            </div>
            <hr className="board-form-underline" />
            <form>
              <label>
                <input className="new-board-input"
                  onChange={this.handleChange('name')}
                  placeholder="Name"
                  value={this.state.name} />
              </label>
              <button className="new-board-submit"
                onClick={this.handleSubmit}>Create</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(NewBoardForm);