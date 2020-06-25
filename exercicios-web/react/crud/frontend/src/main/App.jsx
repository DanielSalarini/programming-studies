import React from 'react'

import Logo from '../components/templates/Logo'
import Nav  from '../components/templates/Nav'
import Home from '../components/home/Home'
import Footer from '../components/templates/Footer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

export default props =>
    <div className="app">
        <Logo />
        <Nav icon="home" icon2="users"/>
        <Home />
        <Footer icon="heart"/>
    </div>