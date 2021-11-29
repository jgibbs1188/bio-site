import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteProject } from '../helpers/projectData';

export default function DeleteButton({ firebaseKey, setProject }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn-outline-dark btn"
      onClick={() => {
        deleteProject(firebaseKey).then((projects) => {
          setProject(projects);
          history.go(0);
        });
      }}
    >
      <i className="fas fa-trash-alt" />
    </button>
  );
}

DeleteButton.propTypes = {
  firebaseKey: PropTypes.string,
  setProject: PropTypes.func,
};

DeleteButton.defaultProps = {
  firebaseKey: '',
  setProject: () => {},
};
