import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Header from './components/Header.jsx';
import Home from '../src/components/home/Home.jsx';
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Services from "./components/Services/services.jsx";
import Work from "./components/Work/work.jsx";

function App() {
    return (
        <>
            <Header />
            <Home/>
            <About/>
            <Skills/>
            <Services/>
            <Work/>
        </>
    );
}

export default App;
