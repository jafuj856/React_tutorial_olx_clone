import React, { useContext } from 'react'
import { LoderContext, StatusContext } from '../context/Context'
//import '../Components/Signup/Signup.css' 
import './Loader.css'

function Loader() {
  const {lodingstaus} = useContext(StatusContext);
    const {loader} = useContext(LoderContext)
  
  return (
    <div>
        <div className={ loader ? "main" :''}>
      
      { loader  ?
             <div class="container" >
             <div class="ring">{lodingstaus ? lodingstaus :"Loading.."}
                 <span></span>
               </div>
             </div>

             : ""
          }
    </div>
    </div>
  )
}

export default Loader
