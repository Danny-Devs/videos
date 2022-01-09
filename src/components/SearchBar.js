import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onInputChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({
      term: '',
    });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Video Search</label>
          </div>
          <input
            type="text"
            onChange={this.onInputChange}
            value={this.state.term}
          />
          <button className="ui button primary">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
