import React, { useContext } from 'react'
import './location.css'
import { FlageContext } from '../../context/FlageContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs  } from '@fortawesome/free-solid-svg-icons'
import LocationApp from '../../LocationApp'
function LocationSerchMenu() {
    const {flage} = useContext(FlageContext)
  return (
    <div>
       <div className={flage ? 'location' : 'unlocation'}>
       <LocationApp />
           <div className='line'></div>
        
       
        <p style={{color:'gray',fontSize:'small',paddingTop:'15px'}}> Populer Location</p>
        <a><FontAwesomeIcon icon={faLocationCrosshairs} />Kochi</a>
       <a><FontAwesomeIcon icon={faLocationCrosshairs} />Kozikod</a>
       <a><FontAwesomeIcon icon={faLocationCrosshairs} />malappuram</a>
       <a><FontAwesomeIcon icon={faLocationCrosshairs} />Thrissur</a>
    

          </div> 
    </div>
  )
}

export default LocationSerchMenu
