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
      species: 0
    }
  }

  updateState = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  findCharacters = () => {
    const searchWord = this.state.searchWord.toLowerCase()
    const characterQueryResults = this.props.charactersList
      .filter(character => character.name.toLowerCase().includes(searchWord))
    this.props.updateQuery(characterQueryResults)
    this.setState({searchWord: ''})
  }

  filterStatus = () => {
    const currentState = this.state.status.toLowerCase()
    const filterStatus = this.props.charactersList
      .filter(character => character.status.toLowerCase() === currentState)
    this.defaultState(filterStatus)
  }

  filterSpecies = () => {
    const currentState = this.state.species.toLowerCase()
    const filterStatus = this.props.charactersList
      .filter(character => character.species.toLowerCase() === currentState)
    this.defaultState(filterStatus)
  }

  resetQuery = () => {
    this.props.updateQuery(this.props.charactersList)
  }

  defaultState = (filterStatus) => {
    this.props.updateQuery(filterStatus)
    this.setState({status: 0, species: 0})
  }

  searchSection = () => {
    return(
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
    )
  }

  filterStatusSection = () => {
    return(
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
    )
  }

  filterSpeciesSection = () => {
    return(
      <section className="filter-species">
        <label for="filter-species">Filter Species:</label>
        <select name="species" value={this.state.species} onChange={this.updateState} required>
          <option value="0">--Select a Species--</option>
          <option value="Alien">"Alien"</option>
          <option value="Animal">"Animal"</option>
          <option value="Cronenberg">"Cronenberg"</option>
          <option value="Disease">"Disease"</option>
          <option value="Human">"Human"</option>
          <option value="Humanoid">"Humanoid"</option>
          <option value="Mytholog">"Mytholog"</option>
          <option value="Parasite">"Parasite"</option>
          <option value="Poopybutthole">"Poopybutthole"</option>
          <option value="Robot">"Robot"</option>
          <option value="Vampire">"Vampire"</option>
          <option value="Unknown">"Unknown"</option>
        </select>
        <button className="filter-species-button" type="submit" onClick={this.filterSpecies} disabled={this.state.species === 0}>Filter Species</button>
      </section>
    )
  }

  render() {
    return (
      <section className="query-section">
        {this.searchSection()}
        {this.filterStatusSection()}
        {this.filterSpeciesSection()}
        <section>
          <button onClick={this.resetQuery}>Reset Results</button>
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
