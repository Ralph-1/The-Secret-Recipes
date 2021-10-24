import React from 'react';
import PropTypes from 'prop-types';
import Image from './RecipeImage';
import '../assets/styles/categories.css';

const Category = ({ src, name }) => (
  <Image src={src} name={name} className="category" />
);

Category.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Category;
