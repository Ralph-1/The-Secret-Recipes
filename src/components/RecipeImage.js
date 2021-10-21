import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ className, src, name }) => (
  <div className={className}>
    <img src={src} name={name} alt={name} />
    <h3>{name}</h3>
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
