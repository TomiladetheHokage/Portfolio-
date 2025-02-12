import React from 'react';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Header from './components/Header.jsx';
import Home from '../src/components/home/Home.jsx';
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Services from "./components/Services/services.jsx";

function App() {
    return (
        <>
            <Header />
            <Home/>
            <About/>
            <Skills/>
            <Services/>
        </>
    );
}

export default App;
