import React from 'react';
// import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

export const ProjectCardStyle = styled.div`
  width: 18rem;
  margin: 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export function ProjectCard({ user, projects, setProject }) {
  return (
    <ProjectCardStyle className="card">
      <div className="card-body">
        <div className="card-text">
          <strong>Name: </strong>
          {projects.name}
        </div>
        <div className="card-text">
          <strong>Description: </strong>
          {projects.description}
        </div>
        <div className="card-text">
          <strong>Github: </strong>
          {projects.githubLink}
        </div>
        <div className="card-text">
          <strong>Project Demo: </strong>
          {projects.netlifyLink}
        </div>
        {/* <div>
          <Link to={`/projects/${projects.firebaseKey}`}>Details</Link>
        </div> */}
      </div>
      {user ? (
        <>
          <DeleteButton
            firebaseKey={projects.firebaseKey}
            setProject={setProject}
            user={user}
          />
          <EditButton firebaseKey={projects.firebaseKey} />
        </>
      ) : (
        <div />
      )}
    </ProjectCardStyle>
  );
}

ProjectCard.propTypes = {
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
  setProject: PropTypes.func,
};

ProjectCard.defaultProps = {
  projects: {},
  setProject: () => {},
  user: {},
};
