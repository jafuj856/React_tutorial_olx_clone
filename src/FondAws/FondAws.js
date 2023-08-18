import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext} from 'react';
import './FondAws.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FlageContext } from '../context/FlageContext';
const IconPageGlobal = () => {
  const {flage,setFlage} = useContext(FlageContext)
  
  
  return (
    
    <div >
     
      <FontAwesomeIcon onClick={()=>{
        if(flage){
          setFlage(false)
        }
        else{
          setFlage(true)
        }
         }}
          className={flage ? 'icondown': 'iconup'}
         icon="<i class=fa-solid fa-angle-up" />
         
        
    
    </div>
  
  
 
  )
}

export default IconPageGlobal;