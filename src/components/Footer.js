import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';

const FooterStyle = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
`;

export default function Footer({ user }) {
  return (
    <FooterStyle>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="nav-link active navbar-brand" aria-current="page" />
        {user ? <SignOutButton /> : <SignInButton />}
      </nav>
    </FooterStyle>
  );
}

Footer.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

Footer.defaultProps = {
  user: {},
};
