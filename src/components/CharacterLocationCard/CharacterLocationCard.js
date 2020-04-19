import React from 'react';
import { Link } from 'react-router-dom'
import './CharacterLocationCard.scss'

const CharacterLocationCard = ({image}) => {

  return (
    <article className='character-location-card'>
      <img src={image} />
    </article>
  )
}

export default CharacterLocationCard;
