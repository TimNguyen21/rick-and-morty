import React, { Component } from 'react';
import './CharacterCard.scss'

class CharacterCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { id, img, name} = this.props
    return (
      <article className='character-card'>
        <img src={img} alt={"image of " + name}/>
        <div>{name}</div>
        <button>More Details</button>
      </article>
    )
  }
}

export default CharacterCard;
