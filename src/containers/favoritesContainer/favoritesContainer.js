import React, { Component } from 'react';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard'
import { connect } from 'react-redux';
import './favoritesContainer.scss'

class FavoritesContainer extends Component {

  createFavoritesList = () => {
    const checkFavorites = this.props.favorites;
    
    return checkFavorites.length === 0 ? (<h1>There are no favorites!</h1>) : this.favoritesList()
  }

  favoritesList = () => {
    return this.props.favorites.map(favorite => {
      const characterInfo = this.props.charactersInfo.find(character => character.id === favorite.id)

      return (
        <FavoriteCard
        key={characterInfo.id}
        id={characterInfo.id}
        name={characterInfo.name}
        image={characterInfo.image}
        />
      )
    })
  }

  render() {
    return(
      <section className="favorites-container">
        {this.createFavoritesList()}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  charactersInfo: state.charactersInfo,
  favorites: state.favorites
})

export default connect(mapStateToProps, null)(FavoritesContainer);
