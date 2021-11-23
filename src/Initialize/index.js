import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import Routes from '../routes';
import 'firebase/auth';
import Navbar from '../components/Navbar';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.uid,
          isAdmin: process.env.REACT_APP_ADMIN_UID === authed.uid,
        };
        setUser(userInfoObj);
        console.warn(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar user={user} />
      <Routes user={user} />
    </div>
  );
}

export default Initialize;
