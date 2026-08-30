import "./about.css";
import aboutPic from "../assets/about.png"
function About() {
    return (
        <>
            <div className="aboutMain">
                <div className="aboutMain1">
                    <div className="aboutbox">
                        <div className="greenDot"></div>
                        <h4>Get to <span className="purpleText">Know Me</span></h4>
                    </div>
                    <h1>Know Who I'm</h1>
                    <h6>
                        I'm Muhammad Awais Khan, a passionate Full Stack Developer and IT student who loves building modern, scalable and user-friendly web applications.
                    </h6>
                    <h6>I enjoy turning ideas into real digital solutions. My primary focus is building Full Stack Web Applications with clean architecture and real-time capabilities using technologies like React, Node js, Express and MySQL.</h6>
                    <h6 className="hobbyText">
                        A few things I love doing beyond coding and development
                    </h6>
                    <div className="hobbiesDiv">
                        <div className="hobby">
                            Playing Cricket
                        </div>
                        <div className="hobby">
                            Exploring
                        </div>
                        <div className="hobby">
                            Video Editing
                        </div>
                    </div>
                </div>
                <div className="aboutMain2">
                    <img src={aboutPic} alt="about pic" />

                </div>
            </div>

        </>
    )

}
export default About;