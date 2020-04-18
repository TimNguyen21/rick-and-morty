import React, { Component } from 'react';
import './Query.scss'
import { connect } from 'react-redux';
import { updateQuery } from '../../actions'

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

  findCharacters = () => {
    const searchWord = this.state.searchWord.toLowerCase()
    const characterQueryResults = this.props.charactersList.filter(character => character.name.toLowerCase().includes(searchWord))
    this.props.updateQuery(characterQueryResults)
  }

  resetQuery = () => {
    this.props.updateQuery(this.props.charactersList)
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
          <button onClick={this.findCharacters}>Search</button>
          <button onClick={this.resetQuery}>Reset</button>
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  charactersList: state.charactersInfo,
})

const mapDispatchToProps = (dispatch) => ({
  updateQuery: characters => dispatch( updateQuery(characters) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Query);
