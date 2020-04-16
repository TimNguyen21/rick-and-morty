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

  nameCheck = (type) => {
    if(type === undefined) {
      return ''
    } else {
      return type["name"]
    }
  }

  render() {
    const { id, name, status, species, gender, origin, location, image } = this.props.currentCharacterInfo;

    return (
      <section className="character-details">
        <section>
          <img src={image} alt={"image of " + name}/>
        </section>
        <section>
          <h1>{name}</h1>
          <section>
            <div>Status: {status}</div>
            <div>Species: {species}</div>
            <div>Gender: {gender}</div>
            <div>Origin: {this.nameCheck(origin)}</div>
            <div>Location: {this.nameCheck(location)}</div>
          </section>
          <button>Add to Favorite</button>
        </section>
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
