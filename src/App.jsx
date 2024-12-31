import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Home from './home/Home.jsx';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <Home isMenuOpen={isMenuOpen} />
        </>
    );
}

export default App;
