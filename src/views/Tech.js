import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTech } from '../helpers/techData';
// import { Link } from 'react-router-dom';

export default function Tech() {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getTech().then((techArray) => {
      if (isMounted) {
        setTech(techArray);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  console.warn(tech);
  return (
    <>
      <h1>Tech Stack</h1>
      <div>
        {/* {user ? (
          <Link className="linkStyling" to="/create">
            Create a new Tech
          </Link>
        ) : (
          <div />
        )} */}
      </div>
      {/* {tech.map((projects) => (
        // <ProjectCard need to build a tech card or page
          key={projects.firebaseKey}
          projects={projects}
          user={user}
        />
      ))} */}
    </>
  );
}

Tech.propTypes = {
  obj: PropTypes.shape({}),
}.isRequired;
