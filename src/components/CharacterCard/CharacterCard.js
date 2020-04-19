import React from 'react';
import { Link } from 'react-router-dom'
import './CharacterCard.scss'

const CharacterCard = ({ id, img, name }) => {
  return (
    <article className='character-card'>
      <Link to={`/character/${id}`}>
        <img src={img} alt={"image of " + name}/>
        <div>{name}</div>
      </Link>
    </article>
  )
}

export default CharacterCard;
