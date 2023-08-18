import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import LocationSerchMenu from './LocationSerchMenu'

import SellButtonPlus from '../../assets/SellButtonPlus';
import { useContext, useEffect, useState } from 'react';
import { AuthContext, FirebaseContext } from '../../context/Context';
import { getAuth } from 'firebase/auth';


import  IconPageGlobal  from "../../FondAws/FondAws";
import { FlageContext } from '../../context/FlageContext';
import { collection, getDocs, where,query, Firestore } from 'firebase/firestore';


function Header() {

  const {user} =useContext(AuthContext);
  const [locationSerch,setLocationSerch] = useState()
  const [productSerch,setProductSerch] = useState()
  const history = useHistory();
  const auth = getAuth()


 

  const logoutHndler= ()=>{
    auth.signOut();
    history.push('/login')
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div>
        
        <div className="placeSearch">
          <Search data ={{locationSerch}}/>
          <input type="text" 
          value={locationSerch}
          onChange={(e)=>{
          setLocationSerch(e.target.value.toUpperCase())
          }  
        }
          />

       <IconPageGlobal />
     </div>
  <LocationSerchMenu/>
    </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
              value={productSerch}
              onChange={(e)=>{
                setProductSerch(e.target.value)
              }}
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff" data={{productSerch}}></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">

       {user ? <span>Welcome {user.displayName}</span> :<span className='button' onClick={()=>{
        history.push('/login')
       }}>Login</span>}  
              
        </div>
        {user && <span className='button logbutton' onClick={logoutHndler}>Logout</span>}
        
        <div className="sellMenu" onClick={()=>{
        user ? history.push('/create') : history.push('/login')
        }}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
  
  }


export default Header;
library.add(fab,fas,far)
