import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateQuery } from '../../actions'
import "./Nav.scss";

class Nav extends Component {

  resetQuery = () => {
    this.props.updateQuery(this.props.charactersList)
  }

  render() {
    return(
      <section className="nav-section">
        <Link to={`/`}>
          <button onClick={this.resetQuery}>Home</button>
        </Link>
        <Link to={`/favorites`}>
          <button>View Favorites</button>
        </Link>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  charactersList: state.charactersInfo,
})

const mapDispatchToProps = (dispatch) => ({
  updateQuery: characters => dispatch( updateQuery(characters) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
