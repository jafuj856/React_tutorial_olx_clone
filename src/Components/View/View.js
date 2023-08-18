import React,{useEffect,useState,useContext} from 'react';
import { collection,query,where,getDocs } from 'firebase/firestore';
import './View.css';
import { PostContext } from '../../context/PostContext';
import { FirebaseContext } from '../../context/Context';
function View() {
  const [userDetails,SetUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const {getFirestore} = useContext(FirebaseContext)
  useEffect(async()=>{
    if(postDetails){
    const {userid} = postDetails
     console.log(userid+"@@ uid")
    //  getDocs(collection(getFirestore,'users'),where('id','==',userid)).then((result)=>{
    //   result.forEach(element => {
    //     SetUserDetails(element.data())
    //   })
    // })

    const citiesRef = collection(getFirestore, "users");

    const q = query(citiesRef, where("id", "==", userid));


    const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
 
  SetUserDetails(doc.data())
});

    }
  },[])
  return (

 

    <div className="viewParentDiv">
 
      <div className="imageShowDiv">
        <img
          src={postDetails ? postDetails.url :''}
          alt="Not Availeble"
        />
      </div>
      <div className="rightSection">
      {postDetails&&  <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>}
      {userDetails &&  <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
  
    </div>
  
  );

}
export default View;
