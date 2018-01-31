import React from 'react';
import UserSearchContainer from './user_search/user_search_container';

class MembersDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchShared(this.props.currentBoardId).then(() => this.setState({ sharedWith: this.props.sharedWith }));
  }

  componentWillReceiveProps(nextProps) {
    console.log("HIT EWILL RECEIVE NEW PROPS");
    console.log(nextProps);
    if (this.state.sharedWith !== nextProps.sharedWith) {
      this.setState({ sharedWith: nextProps.sharedWith });
    }
  }

  // shouldComponentUpdate(nextProps) {
  //   return this.state.sharedWith !== nextProps.sharedWith;
  // }

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

  handleSharedWith(updatedName) {
    this.setState({ sharedWith: this.props.sharedWith.concat([updatedName]) });
  }

  render() {
    const sharedWith = this.props.sharedWith;

    return (
      <div ref={node => { this.node = node; }} >
        <h1 onClick={this.handleClick} id='members--header'> Members </h1>
        {this.state.visible && (
          <div>
            <UserSearchContainer sharedWith={sharedWith} handleShare={this.handleSharedWith.bind(this)} />
            <h1> current members </h1>
            <p> user search goes here </p>
          </div>
        )}
      </div>
    );
  }
}

export default MembersDropdown;