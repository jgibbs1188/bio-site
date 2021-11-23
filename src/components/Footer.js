import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="nav-link active navbar-brand" aria-current="page">
          FOOTER
        </div>
      </nav>
    </FooterStyle>
  );
}
