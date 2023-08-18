import ReactDOM from 'react-dom';
import App from './App';

import  LoderContext,{ FirebaseContext} from './context/Context';
import  StatusContext from './context/Context';
import  getFirestore from './firebase/config';
import  AuthContext  from './context/Context';
import  FlageContext  from './context/FlageContext';


ReactDOM.render(
 
<FirebaseContext.Provider value={{getFirestore}}>
<StatusContext>
      <LoderContext>
     <AuthContext>
     <FlageContext>
      <App />
      </FlageContext>
   </AuthContext>
   </LoderContext>
   </StatusContext>
</FirebaseContext.Provider>

, document.getElementById('root'));
