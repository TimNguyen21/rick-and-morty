import React, { Component } from 'react';
import './CharacterDetails.scss'
import { connect } from 'react-redux';
import { setCurrentCharactersInfo } from '../../actions';
import { getCharacterInfo } from '../../apiCalls/apiCalls'

class CharacterDetails extends Component {

  componentDidMount = () => {
    const characterId = parseInt(this.props.match);
    this.updateCurrentCharacterInfo(characterId)
  }

  updateCurrentCharacterInfo = (id) => {
    getCharacterInfo(id)
      .then(data => this.props.setCharactersInfo(data))
      .catch(err => console.log(err.message))
  }

  render() {
    const { id, name, status, species, gender, origin, location, image } = this.props.currentCharacterInfo;

    return (
      <section>
      <div>Name: {name}</div>
      <div>Status: {status}</div>
      <div>Species: {species}</div>
      <div>Gender: {gender}</div>
      <div>{image}</div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  currentCharacterInfo: state.currentCharacter
})

const mapDispatchToProps = (dispatch) => ({
  setCharactersInfo: charactersInfo => dispatch( setCurrentCharactersInfo(charactersInfo) )
})

export default connect(mapStateToProps, mapDispatchToProps) (CharacterDetails);
