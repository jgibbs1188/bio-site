import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function DetailsButton({ firebaseKey }) {
  return (
    <Link to={`/projects/${firebaseKey}`} className="btn-outline-dark btn">
      <i className="fas fa-edit" />
    </Link>
  );
}

DetailsButton.propTypes = {
  firebaseKey: PropTypes.string,
};

DetailsButton.defaultProps = {
  firebaseKey: '',
};
