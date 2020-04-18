import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './CharacterCard.scss'

// class CharacterCard extends Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//
//   render() {
//     const { id, img, name} = this.props
//     return (
//       <article className='character-card'>
//         <Link to={`/character/${id}`}>
//           <img src={img} alt={"image of " + name}/>
//           <div>{name}</div>
//         </Link>
//       </article>
//     )
//   }
// }

const CharacterCard = ({ id, img, name }) => {
  return (
    <article className='character-card'>
      <Link to={`/character/${id}`}>
        <img src={img} alt={"image of " + name}/>
        <div>{name}</div>
      </Link>
    </article>
  )
}

export default CharacterCard;
