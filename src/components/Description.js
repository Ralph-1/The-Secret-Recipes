import React from 'react';
import PropTypes from 'prop-types';

const RecipeDescription = ({
  category, area, ingredients, className,
}) => (
  <div className={className}>
    <p className="pt-4">
      <span className="font-weight-bolder h5">Category :</span>
      <span>{category}</span>
    </p>
    <br />
    <hr />
    <p className="pt-4">
      <span className="font-weight-bolder h5">Area :</span>
      <span>{area}</span>
    </p>
    <br />
    <hr />
    <p className="pt-4 font-weight-bolder h5">Ingredients :</p>
    <div className="pb-4">
      {ingredients.map((item) => (
        <span key={Math.random() * 1000}>
          {item}
          {' '}
          |
          {' '}
        </span>
      ))}
    </div>
    <hr />
  </div>
);

RecipeDescription.defaultProps = {
  className: 'text-center ml-5',
};

RecipeDescription.propTypes = {
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(String).isRequired,
  className: PropTypes.string,
};

export default RecipeDescription;
