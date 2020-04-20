import React, { Component } from 'react';
import './Query.scss'
import { connect } from 'react-redux';
import { updateQuery } from '../../actions';
import PropTypes from 'prop-types';

class Query extends Component {
  constructor() {
    super();
    this.state = {
      searchWord: '',
      status: "default",
      species: "default"
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
    this.setState({status: "default", species: "default"})
  }

  searchSection = () => {
    return(
      <section className="search-section">
        <label htmlFor="search-characters">Search Character:</label>
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
        <label htmlFor="filter-status">Filter Status:</label>
        <select name="status" value={this.state.status} onChange={this.updateState} required>
          <option value="default">--Select a Status--</option>
          <option value="alive">"Alive"</option>
          <option value="dead">"Dead"</option>
          <option value="unknown">"Unknown"</option>
        </select>
        <button className="filter-status-button" type="submit" onClick={this.filterStatus} disabled={this.state.status === "default"}>Filter Status</button>
      </section>
    )
  }

  filterSpeciesSection = () => {
    return(
      <section className="filter-species">
        <label htmlFor="filter-species">Filter Species:</label>
        <select name="species" value={this.state.species} onChange={this.updateState} required>
          <option value="default">--Select a Species--</option>
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
        <button className="filter-species-button" type="submit" onClick={this.filterSpecies} disabled={this.state.species === "default"}>Filter Species</button>
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
          <button className="reset-button" onClick={this.resetQuery}>Reset Results</button>
        </section>
      </section>
    )
  }
}

Query.propTypes = {
  updateQuery: PropTypes.func,
  charactersList: PropTypes.array,
}

const mapStateToProps = (state) => ({
  charactersList: state.charactersInfo,
})

const mapDispatchToProps = (dispatch) => ({
  updateQuery: characters => dispatch( updateQuery(characters) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Query);
