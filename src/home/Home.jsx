import React from 'react';
import Styles from "./Home.module.css";
import Data from "./Data.jsx";
import shot from '../assets/hotPic.jpg'; // Make sure to replace with the correct path to your image

const Home = ({ isMenuOpen }) => {
    return (
        <section className={Styles['home_section']} id="home">
            <div className={Styles['home_container']}>
                <div className={Styles['home_img']}>
                    <img src={shot} alt="Profile" />
                </div>
                <Data isMenuOpen={isMenuOpen} />
            </div>
        </section>
    );
}

export default Home;
