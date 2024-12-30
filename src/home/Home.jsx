import React from 'react';
import Styles from "./Home.module.css";
import Social from "./Social.jsx";
import Data from "./Data.jsx";
import shot from '../assets/hotPic.jpg'

const Home = () => {
    return(
        <section className={Styles['home_section']} id="home">
            <div className={Styles['home_container']}>
                <Social/>
                <Data/>
                <img src={shot} alt="Profile"/>
            </div>
        </section>
    )
}

export default Home;
