import React, { Component } from 'react';
import './Query.scss'
import { connect } from 'react-redux';
import { updateQuery } from '../../actions'

class Query extends Component {
  constructor() {
    super();
    this.state = {
      searchWord: '',
      status: 0,
    }
  }

  updateState = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  findCharacters = () => {
    const searchWord = this.state.searchWord.toLowerCase()
    const characterQueryResults = this.props.charactersList.filter(character => character.name.toLowerCase().includes(searchWord))
    this.props.updateQuery(characterQueryResults)
  }

  filterStatus = () => {
    const currentStatus = this.state.status.toLowerCase()
    const filterStatus = this.props.charactersList.filter(character => character.status.toLowerCase() === currentStatus)
    this.props.updateQuery(filterStatus)
  }

  resetQuery = () => {
    this.props.updateQuery(this.props.charactersList)
  }

  render() {
    return (
      <section>
        <section className="search-section">
          <label for="search-characters">Search Character:</label>
          <input
            name='searchWord'
            placeholder='Enter Character Name'
            onChange={this.updateState}
            value={this.state.searchWord}
          />
          <button onClick={this.findCharacters} disabled={this.state.searchWord === ''}>Search</button>
        </section>
        <section className="filter-status">
          <label for="filter-status">Filter Status:</label>
          <select name="status" value={this.state.status} onChange={this.updateState} required>
            <option value="0">--Select a Status--</option>
            <option value="alive">"Alive"</option>
            <option value="dead">"Dead"</option>
            <option value="unknown">"Unknown"</option>
          </select>
          <button className="filter-status-button" type="submit" onClick={this.filterStatus} disabled={this.state.status === 0}>Filter Status</button>
        </section>
        <section>
          <button onClick={this.resetQuery}>Reset Query</button>
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
