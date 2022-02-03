import React from 'react'

import {Link, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { Search } from './components/Search'
import { Footer } from './components/Footer'

import PersistentDrawerRight from './components/Navbar'
import {SingleProperty} from './components/SingleProperty'

export const App=() => {
    return(
        <>
        <PersistentDrawerRight/>
        <Routes>
            <Route exact path="/" element={<Home />}></Route> 
            <Route exact path="/search" element={<Search />}></Route>
            <Route exact path="/property/:id" element={<SingleProperty />} />
        </Routes>
        <Footer></Footer>
        </>
    )
}