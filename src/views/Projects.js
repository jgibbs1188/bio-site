import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../helpers/projectData';

export default function Projects({ user }) {
  const [project, setProject] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getProjects().then((projectArray) => {
      if (isMounted) {
        setProject(projectArray);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <div>
        {user ? (
          <Link className="linkStyling" to="/create">
            Create a Project
          </Link>
        ) : (
          <div />
        )}
      </div>
      {project.map((projects) => (
        <>
          <ProjectCard
            projects={projects}
            key={projects.firebaseKey}
            // Receiving an error for unique keys because the form and the card are on the same page and the form doesn't have a unique key.
            // Will need to move the form to its own page/view probably
          />
        </>
      ))}
    </>
  );
}

Projects.propTypes = {
  obj: PropTypes.shape({}),
}.isRequired;
