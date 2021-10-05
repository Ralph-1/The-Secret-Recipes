import React from 'react';
import PropTypes from 'prop-types';
import Image from './RecipeImage';

const Recipe  = ({ name, src }) => (
  <Image src={src} name ={name} />
);

Recipe.propType = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Recipe;
