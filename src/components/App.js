import React from 'react'
import { AppRoutes } from '../AppRoutes';
import {NavBar} from './NavBar'
import { BrowserRouter } from 'react-router-dom';
const App = () => {

  return (
    <BrowserRouter>
      <div id="main"> 
        <NavBar/>       
        <AppRoutes />
      </div>
    </BrowserRouter>

  )
}


export default App;
