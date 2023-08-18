import React, { Fragment } from 'react';
import Header from '../Components/Header/Header';
import Create from '../Components/Create/Create';
import Loader from '../Loader/Loader';


const CreatePage = () => {
  
  return (
    <Fragment>
      <Header />
      <Create/>
      <Loader />
    </Fragment>
  );
};

export default CreatePage;
