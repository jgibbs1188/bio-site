import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const { dbURL } = firebaseConfig;

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createProject = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/projects.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbURL}/projects/${firebaseKey}.json`, { firebaseKey })
        .then(() => getProjects().then(resolve));
    })
    .catch(reject);
});

export { getProjects, createProject };
