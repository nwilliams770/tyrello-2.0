import React from 'react';
import { withRouter } from 'react-router-dom';

class NewListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board_id: parseInt(this.props.match.params.id),
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
    const params = { title: this.state.title, board_id: this.state.board_id };
    if (params.title === "") {
      return;
    }
    this.props.createList(params);
    this.setState({ title: "" });
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
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
    this.setState({ title: "" });
  }
  render() {
    return (
      <div ref={node => { this.node = node; }} >
        <button onClick={this.handleClick}>
          Add a list...
        </button>
        {this.state.visible && (
          <div>
            <form>
              <div>
                <input onChange={this.handleChange('title')}
                  placeholder="Title"
                  value={this.state.title} />
              </div>
              <button onClick={this.handleSubmit}>Add</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(NewListForm);