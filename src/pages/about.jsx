import "./about.css";
import aboutPic from "../assets/about.png"
import { BiCricketBall } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SiAirplayvideo } from "react-icons/si";

function About() {
    return (
        <>
            <div className="aboutMain">
                <div className="part1">
                    <div className="aboutMain1">
                        <div className="aboutbox">
                            <div className="greenDot"></div>
                            <h4>Get to <span className="purpleText">Know Me</span></h4>
                        </div>
                        <h1>Know Who <span className="purpleText"> I'm</span></h1>
                        <h5>
                            I'm<span className="purpleText"> <b>Muhammad Awais Khan</b></span>, a passionate <span className="purpleText"> <b>Full Stack Developer</b></span> and IT student who loves building modern, scalable and user-friendly <span className="purpleText"><b>web applications</b></span>.
                        </h5>
                        <h5>I enjoy turning ideas into real digital solutions. My primary focus is building <span className="purpleText"><b>Full Stack Web Applications</b></span> with clean architecture and real-time capabilities using technologies like <span className="purpleText"><b>React, Node js, Express and MySQL</b></span>.</h5>
                        <h5 className="hobbyText">
                            A few things I love doing beyond coding and development
                        </h5>
                        <div className="hobbiesDiv">
                            <div className="hobby">
                                <div className="hobbyIcon">
                                    <BiCricketBall />
                                </div>
                                Playing Cricket
                            </div>
                            <div className="hobby">
                                <div className="hobbyIcon">
                                    <MdOutlineTravelExplore />
                                </div>
                                Exploring
                            </div>
                            <div className="hobby">
                                <div className="hobbyIcon">
                                    <SiAirplayvideo />
                                </div>
                                Video Editing
                            </div>
                        </div>
                    </div>
                    <div className="aboutMain2">
                        <img src={aboutPic} alt="about pic" />

                    </div>

                </div>
                <div className="part2">
                    <h4 className="qouteText">
                        <span className="purpleText">
                            {"< "}
                        </span>
                        Code is not just about solving problems, it's about turning ideas into reality 
                       <span className="purpleText">
                            {" />"}
                        </span>
                        
                    </h4>
                </div>
                <div className="part3">
                    <div className="animationcard">
                        <div className="experienceMain">
                            
                        </div>
                    </div>

                </div>

            </div>

        </>
    )

}
export default About;