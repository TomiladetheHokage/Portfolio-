import React from 'react';
import Styles from "./Home.module.css";
import Social from "./Social.jsx";
import Data from "./Data.jsx";
import shot from '../../assets/hotPic.jpg'
import Information from "./Information.jsx";
import ScrollDown from "./ScrollDown.jsx";

const Home = () => {
    return(
        <section className={Styles['home_section']} id="home">
            <div className={Styles['home_container']}>
                <Social/>
                <Data/>
                <div className={Styles['home_pic']}>
                    <img src={shot} alt="Profile"/>
                </div>
            </div>

            <ScrollDown/>
            <Information/>

        </section>
    )
}

export default Home;
