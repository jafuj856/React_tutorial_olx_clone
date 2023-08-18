import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { collection,addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { FirebaseContext, LoderContext } from '../../context/Context';


let loader;
export default function Signup() {

 
 
  const {setLoader} = useContext(LoderContext)
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('')
  const {getFirestore} =useContext(FirebaseContext)
  
 
  
  const history = useHistory()
  const HandleSubmit=(e)=>{
    e.preventDefault()
    loader =true;
    setLoader(loader)
   const auth =getAuth();
      createUserWithEmailAndPassword(auth,email,password).then((result)=>{
        console.log(username)   
        updateProfile(auth.currentUser,{displayName:username}).then(()=>{
          console.log(loader)
          addDoc(collection(getFirestore,'users'),{
            
            id:result.user.uid,
            username:username,
            phone:phone
          }).then(()=>{
            loader=false;
            setLoader(loader)
            history.push("/login")
          })
        })
       }).catch((error) => {
        loader=false
        setLoader(loader)
        const errorCode = error.code;
        alert(errorCode)
      });
  }

  return (
    <div>
     

      <div className="signupParentDiv">
    
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={HandleSubmit}>
          
          
          
          
          
          <label htmlFor="fname">Username</label>
         <br/>
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
            required
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
            required
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
            required
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  );
}
