import React,{useEffect, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import Home from './Pages/Home';
import View from './Pages/ViewPost'

import { AuthContext, LoadContext } from './context/Context';
import { getAuth } from 'firebase/auth';
import  Post  from './context/PostContext';

function App() {
const { user,setUser } =useContext(AuthContext);
const auth =getAuth();
useEffect(()=>{
 
  auth.onAuthStateChanged((user)=>{
    setUser(user)
  })
})

  return (
    <div>
      <Post>
      <Router>
        <Route exact path='/' >
      <Home />
      </Route>

      <Route path='/signup' >
      <Signup />
      </Route>


      <Route path='/login' >
      <Login />
      </Route>

     
      <Route path='/create' >
      <Create />
      </Route>


      <Route path='/view' >
      <View />
      </Route>


      </Router>
      </Post>
    </div>
  );
}

export default App;
