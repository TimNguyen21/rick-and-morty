import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCharactersInfo } from '../../actions'
import './App.scss';
import {Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav'

class App extends Component {

  componentDidMount = () => {
    this.characterCount()
  }

  characterCount = () => {
    let characterCount = [...Array(21).keys()].slice(1)

    characterCount.forEach(character => {
      fetch('https://rickandmortyapi.com/api/character/'+ character)
      .then(response => response.json())
      .then(data => this.props.getCharactersInfo(data))
    })
  }

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
