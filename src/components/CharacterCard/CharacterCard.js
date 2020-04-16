import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
        <Link
          to={`/character/${id}`}
        >
        <button>More Details</button>
        </Link>
      </article>
    )
  }
}

export default CharacterCard;
