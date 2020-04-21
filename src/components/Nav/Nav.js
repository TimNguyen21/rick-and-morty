import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateQuery } from '../../actions'
import "./Nav.scss";
import PropTypes from 'prop-types';

class Nav extends Component {

  resetQuery = () => {
    this.props.updateQuery(this.props.charactersList)
  }

  render() {
    return(
      <section className="nav-section">
        <img src="https://nothingbutgeek.com/wp-content/uploads/2017/06/RAM_LOGO_FINAL.jpg" alt="rick and morty logo"/>
        <Link to={`/rick-and-morty`}>
          <button onClick={this.resetQuery}>Home</button>
        </Link>
        <Link to={`/favorites`}>
          <button>View Favorites</button>
        </Link>
      </section>
    )
  }
}

Nav.propTypes = {
  updateQuery: PropTypes.func,
  charactersList: PropTypes.array,
}

const mapStateToProps = (state) => ({
  charactersList: state.charactersInfo,
})

const mapDispatchToProps = (dispatch) => ({
  updateQuery: characters => dispatch( updateQuery(characters) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
