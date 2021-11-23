import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';
import { getSingleProject } from '../helpers/projectData';

export default function EditProject() {
  const [obj, setObj] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleProject(firebaseKey).then(setObj);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1>Edit {obj.name}</h1>
      <ProjectForm obj={obj} />
    </div>
  );
}
