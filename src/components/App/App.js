import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCharactersInfo } from '../../actions'
import './App.scss';
import {Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav'
import CharactersContainer from '../../containers/charactersContainer/charactersContainer'
import FavoritesContainer from '../../containers/favoritesContainer/favoritesContainer'
import CharacterDetails from '../CharacterDetails/CharacterDetails'
import { getCharacterInfo } from '../../apiCalls/apiCalls'

class App extends Component {

  componentDidMount = () => {
    this.characterCount()
  }

  characterCount = () => {
    let characterCount = [...Array(21).keys()].slice(1);

    characterCount.forEach(character => {
      getCharacterInfo(character)
        .then(data => this.props.getCharactersInfo(data))
        .catch(err => console.log(err.message))
    })
  }

  render() {
    return(
      <main>
        <header>The Rick and Morty Database</header>
        <Nav />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <CharactersContainer />
            )}
          />
          <Route
            path='/favorites'
            render={() => (
              <FavoritesContainer />
            )}
          />
          <Route
            path='/character/:id'
            render={({ match }) => {
              return <CharacterDetails
                match={match.params.id}
              />
            }}
          />
          <Route
            path='*'
            component={CharactersContainer}
          />
        </Switch>
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCharactersInfo: charactersInfo => dispatch( getCharactersInfo(charactersInfo) )
})

export default connect(null, mapDispatchToProps)(App);
