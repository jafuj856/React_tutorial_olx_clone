import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'
export default function Search(props) {
  const {SetPostDetails} = useContext(PostContext)
  console.log(props.data);
  const productSerch = props.data;
    return( <svg
        width="25px"
        height="25px"
        viewBox="0 0 1024 1024"
        data-aut-id="icon"
        color={props.color ? props.color :''}
        className
        fillRule="evenodd"
        onClick={()=>{
          if(props.data.locationSerch){
             if(props.data.locationSerch){  
                var  temp = props.data; 
              SetPostDetails({temp,data:true})
             }
               }else if(props.data.productSerch){
                console.log(props.data+"  from prode")
                SetPostDetails({productSerch,data:true})
               
               }else{
                alert('enter your serch')
               }

        }
      }
      >
        <path
          className="rui-77aaa"
          d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"
        />
      </svg>)
}