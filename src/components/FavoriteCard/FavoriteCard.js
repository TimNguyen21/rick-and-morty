import React from 'react';
import { connect } from 'react-redux';
import './FavoriteCard.scss'
import { Link } from 'react-router-dom'

const FavoriteCard = ({ id, name, image }) => {

  return(
    <article className="favorite-card">
      <section>
        <img src={image} />
        <h1>{name}</h1>
      </section>
      <section>
        <Link to={`/character/${id}`}>
          <button>View Details</button>
        </Link>
        <button>Remove Favorite</button>
      </section>
    </article>
  )
}

const mapStateToProps = (state) => ({
  charactersInfo: state.charactersInfo,
  favorites: state.favorites
})

export default connect(mapStateToProps, null)(FavoriteCard);
