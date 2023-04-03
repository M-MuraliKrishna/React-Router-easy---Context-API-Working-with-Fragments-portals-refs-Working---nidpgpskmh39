import React from 'react';
import { Routes, Route} from 'react-router-dom';
import {Index }from './pages/Index'
import {Home} from './pages/Home'
import {NotFound} from './pages/NotFound'

export const AppRoutes = () => {
    return (
         <>           
            <Routes>
                <Route exact path = '/' element = {<Index/>}/>
                <Route  exact path = '/home' element = {<Home/>}/>
                <Route  path = '*' element = {<NotFound/>}/>                
            </Routes>       
        </>
    )
}
