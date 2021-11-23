import React from 'react';
import { PropTypes } from 'prop-types';

export default function ProjectCard({ projects }) {
  return (
    <div>
      <div>Name: {projects.name}</div>
      <div>Description: {projects.description}</div>
    </div>
  );
}

ProjectCard.propTypes = {
  projects: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
