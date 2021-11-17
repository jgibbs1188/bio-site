import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <>
        <div>
          <Link className="linkStyling" to="/home">
            HOME
          </Link>
          <Link className="linkStyling" to="/projects">
            PROJECTS
          </Link>
          <Link className="linkStyling" to="/tech">
            TECH
          </Link>
          <Link className="linkStyling" to="/about">
            ABOUT ME
          </Link>
          <Link className="linkStyling" to="/contact">
            CONTACT
          </Link>
        </div>
      </>
    </div>
  );
}
