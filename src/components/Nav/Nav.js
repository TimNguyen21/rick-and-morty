import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.scss";

const Nav = () => {

  return(
    <section className="nav-section">
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <button>View Favorites</button>
    </section>
  )
}

export default Nav;
