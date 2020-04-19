import React, { Component } from 'react';
import './CharacterDetails.scss'
import { connect } from 'react-redux';
import { setCurrentCharactersInfo, addFavorite } from '../../actions';
import { getCharacterInfo } from '../../apiCalls/apiCalls'
import CharacterLocationContainer from '../../containers/characterLocationContainer/characterLocationContainer'

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

  addFavorite = () => {
    const characterID = this.props.currentCharacterInfo.id
    const favoriteCheck = this.props.favorites.find(character => character.id == characterID);
    if(!favoriteCheck) {
      this.props.addToFavorites(characterID)
    } else {
      console.log("saved already")
    }
  }

  render() {
    const { id, name, status, species, gender, origin, location, image } = this.props.currentCharacterInfo;

    return (
      <section>
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
            <button onClick={this.addFavorite}>Add to Favorite</button>
          </section>
        </section>
        <section>
          <h2>Characters from the: "{this.nameCheck(location)}"</h2>
          <div><CharacterLocationContainer /></div>
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  charactersInfo: state.charactersInfo,
  currentCharacterInfo: state.currentCharacter,
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  setCharactersInfo: charactersInfo => dispatch( setCurrentCharactersInfo(charactersInfo) ),
  addToFavorites: id => dispatch( addFavorite(id) )
})

export default connect(mapStateToProps, mapDispatchToProps) (CharacterDetails);
