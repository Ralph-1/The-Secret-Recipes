import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/recipeImage.css';

const Image = ({ className, src, name }) => (
  <div className={className}>
    <img className="recipeImage h4 bold" src={src} name={name} alt={name} />
    <h3 className="recipeText">{name}</h3>
  </div>
);

Image.defaultProps = {
  className: 'w-50',
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Image;
