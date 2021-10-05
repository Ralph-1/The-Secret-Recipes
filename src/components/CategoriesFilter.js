import React from 'react';
import PropTypes from 'prop-types';

const CategoriesFilter = ({ onchange, value }) => {
  const categories = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat'];

  return (
    <div>
      <h2>Pick Category</h2>
      <select id="filter" onChange={onchange} value={value}>
        {categories.map((el) => {
          <option key={Math.floor(Math.random() * 100)} value={el}>{el}</option>;
        })}
      </select>
    </div>
  );
};

CategoriesFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CategoriesFilter;
