import React, { Component } from 'react';
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

export default App;
