import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCharactersInfo } from '../../actions'
import './App.scss';
import {Route, Switch } from 'react-router-dom';

import Nav from '../Nav/Nav'

class App extends Component {

  render() {
    return(
      <main>
        <header>The Rick and Morty Database</header>
        <Nav />
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCharactersInfo: charactersInfo => dispatch( getCharactersInfo(charactersInfo) )
})

export default connect(null, mapDispatchToProps)(App);
