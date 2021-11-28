import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Contact({ user }) {
  const ContactStyling = styled.div`
    margin: auto;
    width: 50%;
  `;

  const ContactText = styled.p`
    margin: auto;
    text-align: center;
    margin-top: 15px;
  `;

  const ContactTitle = styled.h1`
    margin: auto;
    text-align: center;
    border: 3px solid darkblue;
    padding: 5px;
    margin-top: 10px;
  `;

  const ContactInfo = styled.h4`
    margin: auto;
    text-align: center;
    border: 3px solid darkblue;
    padding: 5px;
  `;

  return (
    <ContactStyling>
      <ContactTitle>Contact</ContactTitle>
      <ContactText>
        Thank you for your interest in my work! I can be reached using the
        following methods:
      </ContactText>
      <br />
      <ContactInfo>
        Email: {user.email} <br /> Phone: 765-309-2057
      </ContactInfo>
    </ContactStyling>
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
