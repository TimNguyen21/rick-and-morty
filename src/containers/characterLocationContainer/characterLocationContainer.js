import React, { Component } from 'react';
import CharacterLocationCard from '../../components/CharacterLocationCard/CharacterLocationCard'
import { connect } from 'react-redux';
import './characterLocationContainer.scss'
import { updateLocationResidents } from '../../actions'

class CharacterLocationContainer extends Component {

  updateLocationResidents = () => {
    if(this.props.currentCharacter.id === undefined) {
      return ''
    } else {
      const currentCharacterId = this.props.currentCharacter.id;
      const characterLocation = this.props.currentCharacter.location.name;
      const filterCharactersMatchingLocations = this.props.charactersInfo.filter(character => character.location.name === characterLocation)
      const removedCurrentCharacterQuery = filterCharactersMatchingLocations.filter(character => character.id !== currentCharacterId)

      return(
        removedCurrentCharacterQuery.map(character => {
          return <CharacterLocationCard
          id={character.id}
          key={character.id}
          name={character.name}
          image={character.image}/>
        })
      )
    }
  }

  render() {
    return (
      <section className="character-location-container">
        {this.updateLocationResidents()}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  charactersInfo: state.charactersInfo,
  currentCharacter: state.currentCharacter,
  currentLocationResidents: state.currentLocationResidents
})

const mapDispatchToProps = (dispatch) => ({
  updateLocationResidents: charactersId => dispatch( updateLocationResidents(charactersId) )
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterLocationContainer);
