import { Navigate } from 'react-router-dom';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import { Nav } from './components/Nav';
import {Create} from "./pages/Create"
import { Log } from './pages/Log';
import { Main } from './pages/Main.jsx';
import Mas from './pages/Mas';
import { Contacto } from './pages/Contacto';
import { useEffect, useState } from 'react';
import { Admi } from './pages/Admi';
import { Cookie  } from './pages/Cookie';
import { Privacidad } from './pages/Privacidad';
import { Cookies  } from './pages/Cookies';
import {Footer }  from './pages/Footer';
import { Aviso } from './pages/Aviso';
import { Banner } from './pages/Banner';
import { Patrocinadores } from './pages/Patrocinadores';


//protegemos lasr rutas
const ProtectedRoute = ({ user, children }) => {
  
  alert(user)
  console.log(user)

  //solo dejamos que pase el admin a esta ruta
  if (user.role!=='admin' && user.username!=='admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

/*

 <Route
          path="/admin"
          element={
            <ProtectedRoute user={user}>
              <Admi />
            </ProtectedRoute>
          }
        />

*/


function App() {
  
  const [user, setuser] = useState("")

  const traerUser=()=>{
    const user= JSON.parse(localStorage.getItem("user"))||{};

    setuser(user)
    console.log(user)
 
    
  }
  useEffect(()=>{
    traerUser()

  },[])

  return (
    <div className="App">
      <img src='https://www.fpadelib.es/images/logos/fpib_85.png' className='logo'/>
      <Router>
      <Nav/>
      <Banner/>
        <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Create/>} path="/create"/>
        <Route element={<Log/>} path="/log"/>
        <Route element={<Main/>} path="/user"/>
        <Route element={<Mas/>} path="/user/:id"/>
        <Route element={<Contacto/>} path="/contacto"/>
        <Route element={<Admi/>} path="/admin"/>
        <Route element={<Privacidad/>} path="/privacidad"/>
        <Route element={<Cookies/>} path="/cookies"/>
        <Route element={<Aviso/>} path="/aviso"/>
        </Routes>
        <Patrocinadores/>
        <Cookie/>
        <Footer/>
      </Router>
      

      
     
    </div>
  );
}

export default App;
