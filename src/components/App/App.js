import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCharactersInfo, updateQuery } from '../../actions'
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav'
import CharactersContainer from '../../containers/charactersContainer/charactersContainer'
import FavoritesContainer from '../../containers/favoritesContainer/favoritesContainer'
import CharacterDetails from '../CharacterDetails/CharacterDetails'
import BadRoute from '../404Page/404Page'
import { getCharacterInfo } from '../../apiCalls/apiCalls'
import PropTypes from 'prop-types';

class App extends Component {

  componentDidMount = () => {
    this.characterListings();
  }

  characterListings = () => {
    let characterCount = [...Array(400).keys()].slice(1);
    let characterList = []

    characterCount.forEach(character => {
      getCharacterInfo(character)
        .then(data => {
          this.props.getCharactersInfo(data);
          characterList.push(data)
        })
        .catch(err => console.log(err.message))
    })

    this.props.updateQuery(characterList)
  }

  render() {
    return(
      <main>
        <Nav />
        <Switch>
          <Route
          path='/character/:id'
          render={({ match }) => {
            return <CharacterDetails
            match={match.params.id}
            />
          }}
          />
          <Route
          path='/favorites'
          render={() => (
            <FavoritesContainer />
          )}
          />
          <Route
            path='/rick-and-morty'
            render={() => (
              <CharactersContainer />
            )}
          />
          <Route
            exact
            path='/'
            render={() => (
              <CharactersContainer />
            )}
          />
          <Route
            path='*'
            component={BadRoute}
          />
        </Switch>
      </main>
    )
  }
}

App.propTypes = {
  getCharactersInfo: PropTypes.func,
  updateQuery: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  getCharactersInfo: charactersInfo => dispatch( getCharactersInfo(charactersInfo) ),
  updateQuery: characters => dispatch( updateQuery(characters) )
})

export default connect(null, mapDispatchToProps)(App);
