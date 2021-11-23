import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// const createProject = (obj) => new Promise((resolve, reject) => {
//   axios
//     .post(`${dbURL}/projects.json`, obj)
//     .then((response) => {
//       const firebaseKey = response.data.name;
//       axios
//         .patch(`${dbURL}/projects/${firebaseKey}.json`, { firebaseKey })
//         .then(() => getProjects().then(resolve));
//     })
//     .catch(reject);
// });

const createProject = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/projects.json`, obj)
    .then((response) => {
      axios.patch(`${dbURL}/projects/${response.data.name}.json`, {
        firebaseKey: response.data.name,
      });
    })
    .then(() => {
      getProjects().then(resolve);
    })
    .catch(reject);
});

const updateProject = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbURL}/projects/${obj.firebaseKey}.json`, obj)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbURL}/projects/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getSingleProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/projects/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getSingleProject,
};
