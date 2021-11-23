import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createProject, updateProject } from '../helpers/projectData';

const initialState = {
  name: '',
  description: '',
  firebaseKey: '',
};

function NewProjectForm({ obj = {} }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        description: obj.description,
        firebaseKey: obj.firebaseKey,
      });
    }
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

NewProjectForm.propTypes = {
  obj: PropTypes.shape({}),
}.isRequired;

export default NewProjectForm;
