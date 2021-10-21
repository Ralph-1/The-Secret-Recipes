import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div bg="light" expand="lg" className="nav Header">
    <Link className="home-link" to="/">
      <h2>The Sercet Recipes 🤤</h2>
    </Link>
  </div>
);

export default Nav;
