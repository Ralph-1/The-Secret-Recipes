import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-boostrap';

const Images = ({ className, src, name }) => (
  <div className={className}>
    <Image src={src} name={name} />
    <h3>
      Name
      {name}
    </h3>
  </div>
);

Images.defaultProps = {
  className: 'w-50',
};

Images.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Images;
