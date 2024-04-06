import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import CRUDTablesStations from './components/CRUDTablesStations/CRUDTablesStations.jsx';

import Modal from 'react-modal';

Modal.setAppElement('#root'); 
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const jwtToken = Cookies.get('jwt');
    console.log(!!jwtToken);
    setIsLoggedIn(!!jwtToken);
  }, []);
  return (
    <Router>
    <Routes>
    <Route path="/" element={<CRUDTablesStations />} />
    </Routes>
      </Router>

    /*
      <Router basename='/'>
        <Routes>
          <Route path="/items" element={isLoggedIn?  <CRUDItems /> :<Login/> }></Route>
        <Route path="/" element={ isLoggedIn?  <Home /> :<Login/> }></Route>
          <Route path="/orders" element={isLoggedIn?  <Orders /> :<Login/> }/>
          <Route path="/users" element={isLoggedIn?  <CRUDUsers /> :<Login/> }/>
          <Route path="/administrators" element={isLoggedIn?  <CRUDAdmins /> :<Login/> }/>
          <Route path="/locations" element={isLoggedIn?  <CRUDLocations /> :<Login/> }/>
        </Routes>
      </Router>
    */
  )
}
export default App
