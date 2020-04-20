import React, { Component } from 'react';
import CharacterLocationCard from '../../components/CharacterLocationCard/CharacterLocationCard'
import { connect } from 'react-redux';
import './characterLocationContainer.scss';
import PropTypes from 'prop-types';

class CharacterLocationContainer extends Component {

  updateLocationResidents = () => {
    if(this.props.currentCharacter.id === undefined) {
      return ''
    } else {
      const currentCharacterId = this.props.currentCharacter.id;
      const characterLocation = this.props.currentCharacter.location.name;
      const filterCharactersMatchingLocations = this.props.charactersInfo
        .filter(character => character.location.name === characterLocation)
      const removedCurrentCharacterQuery = filterCharactersMatchingLocations
        .filter(character => character.id !== currentCharacterId)

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

CharacterLocationContainer.propTypes = {
  charactersInfo: PropTypes.array,
  currentCharacter: PropTypes.object,
}

const mapStateToProps = (state) => ({
  charactersInfo: state.charactersInfo,
  currentCharacter: state.currentCharacter,
})

export default connect(mapStateToProps, null)(CharacterLocationContainer);
