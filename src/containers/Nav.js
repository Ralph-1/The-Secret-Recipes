import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div bg="light" expand="lg" className="nav Header bg-dark mb-2">
    <Link className="home-link container" to="/">
      <h2 className="Nav-text text-white">The Sercet Recipes 🤤</h2>
    </Link>
  </div>
);

export default Nav;
