import Style from './About.module.css'
const Info = () => {
    return(
        <>
            <div className={Style['info_container']}>
                <div className={Style['info']}>
                    <i className="fa-regular fa-lightbulb"></i>
                    <h2>Experience</h2>
                    <p>2 + years</p>
                </div>

                <div className={Style['info']}>
                    <i className="fa-solid fa-briefcase"></i>
                    <h2>Completed</h2>
                    <p>5 projects</p>
                </div>

                {/*<div className={Style['info']}>*/}
                {/*    <div className="icon">🎧</div>*/}
                {/*    <h2>Support</h2>*/}
                {/*    <p>Online 24/7</p>*/}
                {/*</div>*/}
            </div>
        </>
    )
}
export default Info