import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/categoriesFilter.css';

const CategoriesFilter = ({ onChange, value }) => {
  const categories = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat'];

  return (
    <div className="flex m-3 cat-filter">
      <h2>Select Category:</h2>
      <select id="filter" onChange={onChange} value={value} className="filter">
        {categories.map((el) => (<option key={Math.random() * 1000} value={el}>{el}</option>))}
      </select>
    </div>
  );
};

CategoriesFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CategoriesFilter;
