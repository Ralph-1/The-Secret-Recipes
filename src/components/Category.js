import React from 'react';
import PropTypes from 'prop-types';
import Images from './RecipeImage';

const Category = ({ src, name }) => (
  <Images scr={src} name={name} />
)

Category.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Category;
