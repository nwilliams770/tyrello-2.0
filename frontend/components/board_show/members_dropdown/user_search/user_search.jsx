import React from 'react';
import UserSearchIndex from './user_search_index';

class UserSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchVal: '', firstTime: true };
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const newVal = e.target.value;
    this.setState({ searchVal: newVal, firstTime: false }, () => {
      this.props.searchDatabase(this.state.searchVal);
    });
  }

  clearState() {
    this.setState({ searchVal: '', firstTime: false });
  }

  render() {
  

    return (
      <div className="UserSearch">
        <input id="UserSearchInput" onChange={this.handleChange} type="text"
          placeholder="Search for a user"
          value={this.state.searchVal}></input>

        <ul> {this.props.sharedWith} </ul>
        
        <UserSearchIndex id="UserSearchUL" firstTime={this.state.firstTime}
          searchItems={Object.values(this.props.userSearchResults)}
          searchVal={this.state.searchVal}
          currentUser={this.props.currentUser}
          currentBoardId={this.props.match.params.id}
          shareBoard={this.props.shareBoard}
          fetchShared={this.props.fetchShared}
          handleShare={this.handleSharedWith} />
      </div>
    );
  }
}

export default UserSearch;