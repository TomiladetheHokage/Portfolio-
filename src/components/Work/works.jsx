import {workData} from "./workData.jsx";
import {projectsNav} from "./workData.jsx";
import WorkItems from "./WorkItems.jsx";
import styles from './work.module.css'
import {useEffect, useState} from "react";

const Works = () => {
    const [item, setItem] = useState({name: "all"});
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if(item.name === "all"){
            setProjects(workData)
        } else {
            const newProjects = workData.filter((project) => {
                return project.category === item.name
            })
            setProjects(newProjects);
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent});
    }

    return(
        <>
            <div className={styles["work_filters"]}>
                {projectsNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => handleClick(e, index)}
                            className={styles["work__item"]}
                            key={index}
                        >
                    {item.name}
                </span>
                    )
                })}
            </div>

            <div className={styles['work__container']}>
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id} />
                })}
            </div>
        </>
    )
}

export default Works;