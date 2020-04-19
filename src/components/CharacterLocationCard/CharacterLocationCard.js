import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './CharacterLocationCard.scss'
import { connect } from 'react-redux';
import { setCurrentCharactersInfo} from '../../actions';

class CharacterLocationCard extends Component {

  updateCurrentCharacterInfo = () => {
    const currentCharacter = this.props.charactersInfo.find(character => character.id === this.props.id);
    this.props.setCharactersInfo(currentCharacter)
  }

  render() {
    const { id, name, image } = this.props

    return (
      <article className='character-location-card'>
        <Link to={`/character/${id}`}>
          <img src={image} alt={"image of " + name} onClick={this.updateCurrentCharacterInfo}/>
        </Link>
      </article>
    )
  }
}

const mapStateToProps = (state) => ({
  charactersInfo: state.charactersInfo,
})

const mapDispatchToProps = (dispatch) => ({
  setCharactersInfo: charactersInfo => dispatch( setCurrentCharactersInfo(charactersInfo) ),
})

export default connect(mapStateToProps, mapDispatchToProps) (CharacterLocationCard);
