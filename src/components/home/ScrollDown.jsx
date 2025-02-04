import React from 'react';
import styles from './ScrollDown.module.css';

const ScrollDown = () => {
    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.scrollDown} onClick={scrollDown}>
            ↓ Scroll Down ↓
        </div>
    );
};

export default ScrollDown;
