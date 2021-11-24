import React from 'react';
import PropTypes from 'prop-types';
import ProjectDetailsCard from '../components/ProjectDetailsCard';

export default function ProjectDetails({ user, projects }) {
  return (
    <>
      <ProjectDetailsCard user={user} projects={projects} />
    </>
  );
}

ProjectDetails.propTypes = {
  projects: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    githubLink: PropTypes.string,
    netlifyLink: PropTypes.string,
  }),
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

ProjectDetails.defaultProps = {
  projects: {},
  user: {},
};
