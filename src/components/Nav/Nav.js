import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.scss";

const Nav = () => {

  return(
    <section className="nav-section">
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <Link to={`/favorites`}>
        <button>View Favorites</button>
      </Link>
    </section>
  )
}

export default Nav;
