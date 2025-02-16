import React from "react";
import styles from "./work.module.css";
import Works from "./works.jsx";



const Work = () =>{
    return(
        <>
            <section className={styles['work_section']} id='portfolio'>
                <h2 className={styles.section_title} style={{fontSize: '35px'}}>Portfolio</h2>
                <span className={styles.section_subtitle}>Most Recent works</span>
                <Works/>
            </section>
        </>
    )
}
export default Work