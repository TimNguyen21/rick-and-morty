import React, { Component } from 'react';
import './Query.scss'

class Query extends Component {
  constructor() {
    super();
    this.state = {
      searchWord: '',
    }
  }

  updateSearch = (event) => {
    this.setState({searchWord: event.target.value})
  }

  render() {
    return (
      <section>
        <section className="search-section">
          <label>Search Character:</label>
          <input
            name='searchWord'
            placeholder='Enter Character Name'
            onChange={this.updateSearch}
            value={this.state.searchWord}
          />
          <button>Search</button>
        </section>
      </section>
    )
  }
}

export default Query;
