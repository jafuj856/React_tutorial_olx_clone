import { createContext, useState } from "react";

export const FirebaseContext = createContext(null);

export const AuthContext = createContext(null);
export const LoderContext = createContext(null);
export const StatusContext = createContext(null);


export default function Context ({children}){
  const [user,setUser] =  useState(null);
   const [loader,setLoader] = useState(null);
   const [lodingstaus,setLodingStaus] = useState(0);
  return(
        
        <LoderContext.Provider value={{loader,setLoader}}>
       <AuthContext.Provider value={{user,setUser}}>
        <StatusContext.Provider value={{lodingstaus,setLodingStaus}}>
           {children}
           </StatusContext.Provider>
      </AuthContext.Provider>
      </LoderContext.Provider>
     
    
  )
}

