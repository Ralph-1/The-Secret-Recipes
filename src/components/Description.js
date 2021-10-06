import React from 'react';
import PropTypes from 'prop-types';

const RecipeDescription = ({
  category, area, ingredients, className,
}) => (
  <div className={className}>
    <p>
      <span>Category :</span>
      <span>{category}</span>
    </p>
    <br />
    <hr />
    <p>
      <span>Area :</span>
      <span>{area}</span>
    </p>
    <br />
    <hr />
    <p>Ingredients :</p>
    {ingredients.map((item) => (
      <span key={Math.floor(Math.random * 1000)}>
        {item}
        {' '}
        |
        {' '}
      </span>
    ))}
    <hr />
  </div>
);

RecipeDescription.defaultProps = {
  className: 'w-50',
};

RecipeDescription.propTypes = {
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(String).isRequired,
  className: PropTypes.string,
};

export default RecipeDescription;
