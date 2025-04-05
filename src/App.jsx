import React from 'react';
import './App.css';
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Header from './components/Header.jsx';
import Home from '../src/components/home/Home.jsx';
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Services from "./components/Services/services.jsx";
import Work from "./components/Work/work.jsx";
import WorkExperience from "./components/experience/workExperience.jsx";
import GetInTouch from "./components/getIntouch/GetInTouch.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
    return (
        <>
            <Header />
            <Home/>
            <About/>
            <Skills/>
            <Services/>
            <Work/>
            <WorkExperience/>
            <GetInTouch/>
            <Footer/>
        </>
    );
}

export default App;
