import { createContext, useState } from "react";

export const FlageContext = createContext(null) 

export default function Flage ({children}){
     const [flage,setFlage] = useState(null)
    return(
        <FlageContext.Provider value={{flage,setFlage}}>
            {children}
        </FlageContext.Provider>

    )

}