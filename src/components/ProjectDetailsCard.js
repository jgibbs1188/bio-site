import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { deleteProject } from '../helpers/projectData';
import { ProjectCardStyle } from './ProjectCard';

export default function ProjectDetailsCard({ projects, user }) {
  const { firebaseKey } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    deleteProject(firebaseKey);
    history.push('/projects');
  };

  return (
    <ProjectCardStyle className="card">
      <div className="card-body">
        <div className="card-text">Name: {projects.name}</div>
        <div className="card-text">Description: {projects.description}</div>
        <div className="card-text">Github: {projects.githubLink}</div>
        <div className="card-text">Netlify: {projects.netlifyLink}</div>
      </div>
      {user ? (
        <>
          <button
            type="button"
            className="fas fa-trash-alt"
            onClick={handleDelete}
            label="delete"
          />
          <Link to={`/edit/${projects.firebaseKey}`}>Edit</Link>
        </>
      ) : (
        <div />
      )}
    </ProjectCardStyle>
  );
}

ProjectDetailsCard.propTypes = {
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

ProjectDetailsCard.defaultProps = {
  projects: {},
  user: {},
};
