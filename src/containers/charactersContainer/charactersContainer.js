import React, { Component } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Query from '../../components/Query/Query';
import { connect } from 'react-redux';
import './charactersContainer.scss';
import { updateQuery } from '../../actions';
import PropTypes from 'prop-types';


class CharactersContainer extends Component {

  createCharactersList = () => {
    const currentQuery = this.props.currentQuery;
    return currentQuery.length === 0 ?
      (this.noResultsMessage()) : this.updateQueryList();
  }

  resetSearch = () => {
    this.props.updateQuery(this.props.charactersList)
  }

  noResultsMessage = () => {
    return (
      <section>
        <h1>There are no results</h1>
        <button onClick={this.resetSearch}>Reset Search</button>
      </section>
    )
  }

  updateQueryList = () => {
    return this.props.currentQuery.map(character => {
      return (
        <CharacterCard
        id={character.id}
        key={character.id}
        img={character.image}
        name={character.name}
        />
      )
    })
  }

  render() {
    return (
      <section className="main-page">
        <section>
          <Query />
        </section>
        <section className="characters-section">
        <h1>Characters</h1>
          <section className='characters-container'>
          {this.createCharactersList()}
          </section>
        </section>
      </section>
    )
  }
}

CharactersContainer.propTypes = {
  charactersList: PropTypes.array,
  currentQuery: PropTypes.array,
  updateQuery: PropTypes.func,
}

const mapStateToProps = (state) => ({
  charactersList: state.charactersInfo,
  currentQuery: state.currentQuery
})

const mapDispatchToProps = (dispatch) => ({
  updateQuery: characters => dispatch( updateQuery(characters) )
})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer);
