import * as React from 'react';

import { collection, getDocs } from "firebase/firestore";

import { auth, db } from './firebase';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Dashbord from './pages/Dashbord';
import LogIn from './pages/LogIn';
import { onAuthStateChanged } from 'firebase/auth';

export const AppContext = React.createContext();

function App() {

  const [dataCarts, setDataCarts] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const theme = createTheme({
    palette: {
      primary: {
        light: '#fff',
        main: '#fff',
        dark: '#002884',
        contrastText: '#fff',
      }

    }
  });
  const getDb = () => {
    const dataBaseRef = collection(db, 'events')
    getDocs(dataBaseRef)
      .then(res => {
        const datas = res.docs.map(doc => (doc.data()))
        setDataCarts(datas)
      })

  }
  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/"/>
    }
    return children
  }

  React.useEffect(() => {

    getDb()
   onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user)
    });
 
  }, [])


  return (
    <AppContext.Provider value={{
      getDb,
      dataCarts,
      currentUser
    }}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
         
            <Route path="/" element={<LogIn />} />           
            <Route path="dashbord" element={<ProtectedRoute><Dashbord /></ProtectedRoute>} />
            
            
           
          </Routes>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
