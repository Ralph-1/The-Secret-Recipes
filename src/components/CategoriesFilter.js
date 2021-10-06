import React from 'react';
import PropTypes from 'prop-types';

const CategoriesFilter = ({ onChange, value }) => {
  const categories = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat'];

  return (
    <div>
      <h2>Pick Category</h2>
      <select id="filter" onChange={onChange} value={value}>
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
