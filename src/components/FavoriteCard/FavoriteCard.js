import React from 'react';
import { connect } from 'react-redux';
import './FavoriteCard.scss'

const FavoriteCard = ({ id, name, image }) => {

  return(
    <article>
      <section>
        <img src={image} />
        <h1>{name}</h1>
      </section>
      <section>
        <button>View Details</button>
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
