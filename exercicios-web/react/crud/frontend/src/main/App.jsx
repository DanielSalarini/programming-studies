import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/templates/Logo'
import Nav  from '../components/templates/Nav'
import Footer from '../components/templates/Footer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav icon="home" icon2="users"/>
            <Routes />
            <Footer icon="heart"/>
        </div>

    </BrowserRouter>
