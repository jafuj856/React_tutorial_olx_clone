import React, { useContext, useState } from 'react';
import '../Signup/Signup.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { LoderContext } from '../../context/Context';
let loader;
function Login() {
  
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const {setLoader} = useContext(LoderContext)
  const history = useHistory();
  const handleSubmit=(e)=>{
   
    e.preventDefault();
    loader= true;
    setLoader(loader)
    console.log(loader)
    console.log(password)

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        loader=false
        setLoader(loader)
        history.push('/')
        
      })
      .catch((error) => {
        const errorCode = error.code;
        loader=false;
        setLoader(loader)
        alert(errorCode)
        
        const errorMessage = error.message;
      });


  }

console.log(loader+" befor return")
  return (
    <div>
                

      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            Value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            required
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{
          history.push('/signup')
        }}>Signup</a>
      </div>
      </div>
  );
}

export default Login;
