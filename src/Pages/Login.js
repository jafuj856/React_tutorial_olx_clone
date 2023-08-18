import React from 'react';
import Login from '../Components/Login/Login';
import Loader from '../Loader/Loader';

function LoginPage() {
  return (
    <div>
      <Login />
      <Loader />
    </div>
  );
}

export default LoginPage;
