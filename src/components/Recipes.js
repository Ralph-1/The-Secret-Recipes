import React from 'react';
import PropTypes from 'prop-types';
import Image from './RecipeImage';

const Meal = ({ name, src }) => (
  <Image src={src} name={name} alt={name} />
);

Meal.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Meal;
