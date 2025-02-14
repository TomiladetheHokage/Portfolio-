import React from 'react';
import styles from './work.module.css';

const WorkItems = ({ item }) => {
    const cardClass = item.id === 5 ? `${styles.work_card} ${styles.special_card}` : styles.work_card;
    const imageClass = item.id === 5 ? styles["special_image"] : styles["work_card_image"];

    return (
        <div className={cardClass} key={item.id}>
            <img src={item.image} alt={item.title} className={imageClass} />
            <h3 className={styles["work_title"]}>{item.title}</h3>
            <p className={styles["work_description"]}>{item.description}</p>
            <a href="#" className={styles["work_button"]}>
                Demo <i className={`${styles.arrow_icon} fa-light fa-arrow-right`}></i>
            </a>
        </div>
    );
};


export default WorkItems;
