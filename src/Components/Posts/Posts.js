import React, { useEffect } from 'react';
import { useContext,useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../context/Context';
import { PostContext } from '../../context/PostContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Posts() {
const {getFirestore} = useContext(FirebaseContext)
const {postDetails,SetPostDetails} = useContext(PostContext)
const [products,setProducts] = useState([])
const [serchDetailse,setSerchDetailse] = useState([])
const history = useHistory()

 useEffect(()=>{
    getDocs(collection(getFirestore,"products")).then(snapshot=>{

   
      const allPost = snapshot.docs.map((product)=>{
    
  
            return{
              ...product.data(),
              id:product.id
            }
          })
        setProducts(allPost)
      })
  
    },[])
   if(postDetails){
   var Serchandler=(async()=>{
     if(postDetails.temp){ 
      
    const productRef= collection(getFirestore,'products');
    const q=  query(productRef,where('district' ,'==',postDetails.temp.locationSerch))
    const querySnapshot = await getDocs(q);
    const allPost = querySnapshot.docs.map((product)=>{
    
  
      return{
        ...product.data(),
        id:product.id
      }
    })
      if(allPost.length!==0){
     setSerchDetailse(allPost)
      }else{
        alert('not found')
      }
  }else if(postDetails.productSerch){
    const productRef= collection(getFirestore,'products');
    const q=  query(productRef,where('category' ,'==',postDetails.productSerch.productSerch))
    const querySnapshot = await getDocs(q);
    const allPost = querySnapshot.docs.map((product)=>{
    
  
      return{
        ...product.data(),
        id:product.id
      }
    })
    if(allPost.length!==0){
      console.log(allPost)
     console.log(typeof(allPost))
     setSerchDetailse(allPost)
    }else{
      alert('not found')
    }
  }
  })
  Serchandler()
   }
  return (
    <div className="postParentDiv">

{postDetails ?
   
  
    <div className="moreView">
      <div className="heading">
        <span>Serch Results</span>
        <span>View more</span>
      </div>
      <div className="cards">
        
      { serchDetailse.map(product=>{
        
return   <div
          className="card"

          onClick={()=>{
            SetPostDetails(product)
            setProducts(product)
            history.push('/view')}}
        >
          <div className="favorite">
            <Heart></Heart>
          </div>
          <div className="image">
            <img src={product.url} alt="product.name" />
          </div>
          <div className="content">
            <p className="rate">&#x20B9; {product.price}</p>
            <span className="kilometer">{product.category}</span>
            <p className="name"> {product.name}</p>
          </div>
          <div className="date">
            <span>{product.createdAt}</span>
          </div>
        </div>

})
                
                  }


      </div>
    </div>
    :''} 
   



      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          
         { products.map(product=>{
   
 return   <div
            className="card"

            onClick={()=>{
              SetPostDetails(product)
              setProducts(product)
              history.push('/view')}}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="product.name" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>

})
                  
                   }


        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
