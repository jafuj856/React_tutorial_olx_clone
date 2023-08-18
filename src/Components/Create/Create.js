import React, { Fragment, useState,useContext } from 'react';
import './Create.css';
import '../Signup/Signup.css'
import Header from '../Header/Header';
import { storage } from '../../firebase/config';
import {  ref,getDownloadURL, uploadBytesResumable } from "firebase/storage";
//import { getDatabase, onDisconnect } from "firebase/database";
import { FirebaseContext,AuthContext, LoderContext, StatusContext } from '../../context/Context';
import { addDoc, collection } from 'firebase/firestore';
import {useHistory} from 'react-router-dom'
const Create = () => {
  let loader;
 const {setLodingStaus} = useContext(StatusContext);
  const {setLoader} = useContext(LoderContext);
  const [name,SetName] =useState('');
  const [category,setCategory] = useState('');
  const [image,setImage] = useState();
  const [price,setPrice] = useState();
  const [state,setState] = useState();
  const [district,setDistrict] = useState();
  const [homeTown,setHomeTown] = useState();
  const [exLocation,setExLocation] = useState();
  const {getFirestore} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext);
  const history = useHistory()
  const date = new Date();
 
  const handleSubmit=(e)=>{
    e.preventDefault();
   
    if(image){

      loader = true 

      
   

      const storageRef = ref(storage,`/image/${image.name}`)
      
        alert("imagename")       
         
      
         const uploadTask = uploadBytesResumable(storageRef, image)
           


         uploadTask.on("state_changed",
         (snapshot) => {
          console.log(JSON.stringify(snapshot));
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        setLodingStaus(progress);
        },
      (error) => {
        
        setLoader(loader)
        alert(error+"    from snap error") 
    } ,
      
         ()=>{
          alert("hihihihihi")
        getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
          console.log(url+"   #####  url")

        
           
          addDoc(collection(getFirestore,'products'),{
           
            name, 
            category,
            price,
            url,
            state,
            district,
            homeTown,
            ExactLocation:exLocation,
            userid:user.uid,
            createdAt:date.toDateString()
          }).catch((err)=>{
            alert(err)
          })
          
          loader= false; 
          setLoader(loader) 
           history.push('/');
          
        }).catch((error)=>{
          loader = false
        
          alert(error+"   from  image error")
          setLoader(loader) 
        
        })
      })
    }
      setLoader(loader)  
    
  }
 
  console.log(loader+" ##### from under loder #########")
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              Value={name}
              onChange={(e)=>{SetName(e.target.value)}}
              required
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              Value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
              required
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" 
            Value={price}
            onChange={(e)=>{setPrice(e.target.value)}} required/>
            <br />

            <label htmlFor="fname">State</label>
            <br />
            <select className="input"  id="fname" name="state" placeholder='Enter your stat'
            Value={state}
            onChange={(e)=>{
              setState(e.target.value)}} required>
              <option className="input" value='kerala' selected hidden>Select Your State</option>
              <option className="input" value='kerala'>Kerala</option>
              <option className="input" value='kerala'>Tamilnadu</option>
              <option className="input" value='kerala'>Karnattaka</option>
              
            </select>
            <br />
          { state ?
             <div>
            <br />
          <input className="input" type='text'
           name='district' 
           placeholder='Enter your District'
           value={district}
           onChange={((e)=>{
              setDistrict(e.target.value.toUpperCase())
           })}
           />
           </div> :''}
           { district ?
            <div>
              <br/>
              <input className="input" type='text'
           name='town' 
           placeholder='Enter your HomeTown'
           value={homeTown}
           onChange={((e)=>{
              setHomeTown(e.target.value)
           })}
           />
            </div>
            :''
           }

{ district ?
            <div>
              <br/>
              <input className="input" type='text'
           name='location' 
           placeholder='Enter your Curect Location'
           value={exLocation}
           onChange={((e)=>{
              setExLocation(e.target.value)
           })}
           />
            </div>
            :''
           }
          <br />
          <img alt="Posts" width="80px" height="80px" src={image ? URL.createObjectURL(image) :''}></img>
         
            <br />
            <input onChange={(e)=>{
                   setImage(e.target.files[0])  
            }} type="file" required />
            <br />
            <button onClick={
               handleSubmit
            } className="uploadBtn">upload and Submit</button>
         
        </div>
      
      </card>
    </Fragment>
  );
};

export default Create;
