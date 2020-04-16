import React, { Component } from 'react';
import './CharacterDetails.scss'

class CharacterDetails extends Component {

  render() {
    const number = this.props.match

    return (
      <section>
        {number}
      </section>
    )
  }
}

export default CharacterDetails;
