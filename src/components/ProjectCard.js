import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const ProjectCardStyle = styled.div`
  width: 18rem;
  margin: 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export default function ProjectCard({ user, projects, setProject }) {
  return (
    <ProjectCardStyle className="card">
      <div className="card-body">
        <div className="card-text">Name: {projects.name}</div>
        <div className="card-text">Description: {projects.description}</div>
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
  }),
  setProject: PropTypes.func,
};

ProjectCard.defaultProps = {
  projects: {},
  setProject: () => {},
};

ProjectCard.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

ProjectCard.defaultProps = {
  user: {},
};
