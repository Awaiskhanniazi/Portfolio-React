import "./skill.css";
function Skill({icon,text}){
    return(
        <>
        <div className="skill">
            <div className="icon">
                {icon}
            </div>
            <div className="text">
                {text}
            </div>

        </div>
        </>
    )

}
export default Skill