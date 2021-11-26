import React from 'react';
import PropTypes from 'prop-types';

export default function Contact({ user }) {
  return (
    <>
      <h1>Contact</h1>
      <p>
        Thank you for your interest in my work! I can be reached using the
        following methods:
      </p>
      <br />
      <h4>Email: {user.email}</h4>
      <h4>Phone: 765-309-2057</h4>
    </>
  );
}

Contact.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
    email: PropTypes.string,
  }),
};

Contact.defaultProps = {
  user: {},
};
