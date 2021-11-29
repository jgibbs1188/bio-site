import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getTech = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/tech.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createTech = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/tech.json`, obj)
    .then((response) => {
      axios.patch(`${dbURL}/tech/${response.data.name}.json`, {
        firebaseKey: response.data.name,
      });
    })
    .then(() => {
      getTech().then(resolve);
    })
    .catch(reject);
});

export { getTech, createTech };
