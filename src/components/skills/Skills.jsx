import Styles from "./Skils.module.css"
import Frontend from "./Frontend.jsx";
import Backend from "./Backend.jsx";

const Skills = () => {

    return(
        <>
            <section className={Styles['skill_section']}>
                <h2 className={Styles['section_title']}>Skills</h2>
                <span className={Styles['section_subtitle']}>My technical level</span>

                <div className={Styles['skill_container']}>
                    <Frontend/>
                    <Backend/>
                </div>
            </section>
        </>
    )
}

export default Skills