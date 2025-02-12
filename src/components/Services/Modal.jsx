import React from "react";
import styles from "./Modal.module.css";
import {FaCheckCircle} from "react-icons/fa";
import Styles from "../skills/Skils.module.css";

const Modal = ({ isOpen, onClose, title, description, points }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>✖</button>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <ul className={styles.list}>
                    {points.map((point, index) => (
                        <li key={index} className={styles.listItem}>
                            <FaCheckCircle className={Styles['badge_icon']}/>   {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Modal;
