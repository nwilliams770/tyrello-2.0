import React from 'react';
import UserSearchIndex from './user_search_index';

class UserSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchVal: '', firstTime: true, visible: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const newVal = e.target.value;
    this.setState({ searchVal: newVal, firstTime: false }, () => {
      this.props.searchDatabase(this.state.searchVal);
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
    if (this.node.contains(e.target) || e.target === null) {
      return;
    }
    this.handleClick();
    this.setState({ searchVal: ''});
  }

  render() {

    return (
      <div ref={node => { this.node = node; }} >
        <h1 onClick={this.handleClick} className='members-share--header' > Share </h1>

       {this.state.visible && (
         <div>
          <input id="UserSearchInput" onChange={this.handleChange} type="text"
            placeholder="Search for a user"
            value={this.state.searchVal}></input>

          <UserSearchIndex id="UserSearchUL" firstTime={this.state.firstTime}
            searchItems={Object.values(this.props.userSearchResults)}
            searchVal={this.state.searchVal}
            currentUser={this.props.currentUser}
            currentBoardId={this.props.match.params.id}
            shareBoard={this.props.shareBoard}
            fetchShared={this.props.fetchShared}
            handleShare={this.handleSharedWith} />
        </div>
       )}
      </div>
    );
  }
}

export default UserSearch;