import React from 'react';
import { Link } from 'react-router-dom'
import './CharacterCard.scss'
import PropTypes from 'prop-types';

const CharacterCard = ({ id, img, name }) => {
  return (
    <article className='character-card'>
      <Link to={`/character/${id}`}>
        <img src={img} alt={"image of " + name}/>
        <label htmlFor="charcter-name">{name}</label>
      </Link>
    </article>
  )
}

CharacterCard.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
}

export default CharacterCard;
