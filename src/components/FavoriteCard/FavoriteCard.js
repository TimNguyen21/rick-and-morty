import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FavoriteCard.scss';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../../actions';
import PropTypes from 'prop-types';

class FavoriteCard extends Component {

  removeCharacter = () => {
    const characterId = this.props.id
    this.props.removeFavoriteCharacter(characterId)
  }

  render() {
    const { id, name, image } = this.props

    return (
      <article className="favorite-card">
        <section>
          <img src={image} alt={"image of " + name}/>
          <h1>{name}</h1>
        </section>
        <section>
          <Link to={`/character/${id}`}>
            <button>View Details</button>
          </Link>
          <button onClick={this.removeCharacter}>Remove Favorite</button>
        </section>
      </article>
    )
  }
}

FavoriteCard.propTypes = {
  removeFavoriteCharacter: PropTypes.func,
  charactersInfo: PropTypes.array,
  favorites: PropTypes.array,
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
}

const mapStateToProps = (state) => ({
  charactersInfo: state.charactersInfo,
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  removeFavoriteCharacter: id => dispatch( removeFavorite(id) )
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCard);
