import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createProject, updateProject } from '../helpers/projectData';

const initialState = {
  name: '',
  description: '',
  firebaseKey: '',
  githubLink: '',
  netlifyLink: '',
};

function ProjectForm({ obj = {} }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (obj.firebaseKey) {
        setFormInput({
          name: obj.name,
          description: obj.description,
          githubLink: obj.githubLink,
          firebaseKey: obj.firebaseKey,
          netlifyLink: obj.netlifyLink,
        });
      }
    }
    return () => {
      isMounted = false;
    };
  }, [obj]);

  const history = useHistory();

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateProject(formInput).then(() => {
        history.push('/projects');
        resetForm();
      });
    } else {
      createProject(formInput).then(() => {
        history.push('/projects');
        resetForm();
      });
    }
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Project Name
            <input
              type="text"
              value={formInput.name || ''}
              className="form-control"
              onChange={handleChange}
              id="name"
            />
          </label>
          <label htmlFor="description" className="form-label">
            Project Description
            <input
              type="text"
              value={formInput.description || ''}
              className="form-control"
              onChange={handleChange}
              id="description"
            />
          </label>
          <label htmlFor="description" className="form-label">
            Github Link
            <input
              type="text"
              value={formInput.githubLink || ''}
              className="form-control"
              onChange={handleChange}
              id="githubLink"
            />
          </label>
          <label htmlFor="description" className="form-label">
            Netlify
            <input
              type="text"
              value={formInput.netlifyLink || ''}
              className="form-control"
              onChange={handleChange}
              id="netlifyLink"
            />
          </label>
        </div>
        <button
          type="submit"
          onClick={(e) => handleClick(e)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

ProjectForm.propTypes = {
  obj: PropTypes.shape({}),
}.isRequired;

export default ProjectForm;
