import React from 'react';
import { Link } from 'react-router-dom'
import './404Page.scss'

const BadRoute = () => {
  return (
    <article className='bad-route-page'>
      <h1>Looks Like You Are In The Wrong Neighborhood Yoo</h1>
      <Link to={`/`}>
        <button>Go To Home Page</button>
      </Link>
    </article>
  )
}

export default BadRoute;
