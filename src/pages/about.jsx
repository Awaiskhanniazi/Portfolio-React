import "./about.css";
import aboutPic from "../assets/about.png"
import { BiCricketBall } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SiAirplayvideo } from "react-icons/si";
import { useState } from "react";
import { MdWorkspacePremium, MdLocationOn } from "react-icons/md";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";



function About() {
    const experiences = [
        {
            id: 1,
            company: "Primora Technologies",
            position: "Full Stack Developer",
            data: "july 2026 - Present",
            location: "Remote",
            description: [
                "Led a 3-member team developing a multi-tenant, multi-branch POS system.",
                "Built features using React.js, Node.js, Express.js, Prisma, and MySQL.",
                "Implemented JWT authentication with access and refresh tokens.",
                "Implemented RBAC for Super Admin, Store Manager, Cashier, Inventory Manager, and Accountant.",
                "Developed REST APIs for authentication, products, inventory, sales, and accounting.",
                "Built Axios interceptors for token handling, refresh tokens, and API errors.",
                "Used Git/GitHub for version control and team collaboration."

            ]
        },
        {
            id: 2,
            company: "Primora ",
            position: "Full Stack Web Developer",
            data: "july 2026 - Present",
            location: "Remote",
            description: [
                "Led a 3-member team developing a multi-tenant, multi-branch POS system.",
                "Built features using React.js, Node.js, Express.js, Prisma, and MySQL.",
                "Implemented JWT authentication with access and refresh tokens.",
                "Implemented RBAC for Super Admin, Store Manager, Cashier, Inventory Manager, and Accountant.",
                "Developed REST APIs for authentication, products, inventory, sales, and accounting.",
                "Built Axios interceptors for token handling, refresh tokens, and API errors.",
                "Used Git/GitHub for version control and team collaboration."

            ]
        }
    ]
    const [activeTab, setActiveTab] = useState(0);
    const activeExperience = experiences[activeTab];
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
                    <div className="mainHeading">
                        <h1>Profectional <span className="purpleText">Experience</span></h1>
                    </div>
                    <div className="experienceCard">
                        <div className="experienceMain">
                            {experiences.map((experience, index) => (
                                <div key={experience.id}
                                    className={`${activeTab === index ? "experienceTab active" : "experienceTab"}`}
                                    onClick={() => { setActiveTab(index) }}
                                >
                                    {experience.company}
                                </div>
                            ))}

                        </div>
                        <div className="experienceDetails">
                            <div className="detailsHead">
                                <div className="headIcon">
                                    <MdWorkspacePremium />
                                </div>
                                <div className="headText">
                                    <h2>{activeExperience.position}</h2>
                                    <p>{activeExperience.company}</p>
                                    <div className="positionDetails">
                                        <div className="location">
                                            <span className="positionIcon">
                                                <MdLocationOn />
                                            </span>
                                            <p>{activeExperience.location}</p>
                                        </div>
                                        <div className="date">
                                            <span className="positionIcon">
                                                <HiOutlineCalendarDateRange />
                                            </span>
                                            <p>{activeExperience.data}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="positionDescription">
                                {activeExperience.description.map((item, index) => (
                                    <div className="experiencePoint" key={index}>
                                        <span><GoDotFill/></span>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>
    )

}
export default About;