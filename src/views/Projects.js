import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewProjectForm from '../components/ProjectForm';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../helpers/projectData';

export default function Projects({ obj }) {
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

  const handleClick = (e) => {
    if (e.target.id.includes('form-button')) {
      <NewProjectForm obj={obj} />;
    }
  };

  return (
    <>
      <h1>Projects</h1>
      <div>
        <button type="button" id="form-button" onClick={handleClick}>
          Create a Project
        </button>
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
