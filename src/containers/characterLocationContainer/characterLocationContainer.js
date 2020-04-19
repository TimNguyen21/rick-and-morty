import React, { Component } from 'react';
import CharacterLocationCard from '../../components/CharacterLocationCard/CharacterLocationCard'
import { connect } from 'react-redux';
import './characterLocationContainer.scss'
import { updateLocationResidents } from '../../actions'
import { getCharacterInfo } from '../../apiCalls/apiCalls'

class CharacterLocationContainer extends Component {

  updateLocationResidents = () => {
    if(this.props.currentCharacter.id === undefined) {
      return ''
    } else {
      const characterLocation = this.props.currentCharacter.location.name
      const charactersMatchingLocations = this.props.charactersInfo.filter(character => character.location.name === characterLocation)

      return(
        charactersMatchingLocations.map(character => {
          return <CharacterLocationCard image={character.image}/>
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
