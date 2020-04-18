import React, { Component } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Query from '../../components/Query/Query'
import { connect } from 'react-redux';
import './charactersContainer.scss'

class CharactersContainer extends Component {

  createCharactersList = () => {
    return this.props.charactersList.map(character => {
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
        <section>
        <h1>Characters</h1>
          <section className='characters-container'>
          {this.createCharactersList()}
          </section>
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  charactersList: state.charactersInfo
})

export default connect(mapStateToProps, null)(CharactersContainer);
