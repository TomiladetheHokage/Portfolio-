import React from 'react';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Header from './components/Header.jsx';
import Home from './home/Home.jsx';

function App() {
    return (
        <>
            <Header />
            <Home/>
        </>
    );
}

export default App;
