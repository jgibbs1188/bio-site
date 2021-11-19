import React, { useEffect, useState } from 'react';
import { getProjects } from '../data/projectData';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getProjects().then((project) => {
      if (isMounted) setProjects(project);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <h3>Projects</h3>
      <div>{projects}</div>
    </>
  );
}
