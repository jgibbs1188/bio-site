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
          <ProjectCard key={projects.firebaseKey} projects={projects} />
        </>
      ))}
    </>
  );
}

Projects.propTypes = {
  obj: PropTypes.shape({}),
}.isRequired;
