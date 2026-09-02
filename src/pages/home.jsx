import "./home.css"
import { useEffect, useState } from "react";

import { FaReact, FaNode, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMysql, SiPrisma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbApi } from "react-icons/tb";
import Skill from "../components/skill";
import { NavLink } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";


function Home() {
    const texts = [
        "Full Stack Developer",
        "React Developer",
        "Freelancer"
    ];

    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {

        const currentText = texts[textIndex];

        const timer = setTimeout(() => {

            if (!deleting) {

                setDisplayText(
                    currentText.substring(0, displayText.length + 1)
                );
                if (displayText === currentText) {
                    setTimeout(() => setDeleting(true), 1300);

                }

            } else {

                setDisplayText(
                    currentText.substring(0, displayText.length - 1)
                );
                if (displayText === "") {
                    setDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }

            }

        }, deleting ? 50 : 210);

        return () => clearTimeout(timer);

    }, [displayText, deleting, textIndex]);

    return (
        <>
            <div className="homeHero">
                <div className="nameDetails">
                    <div className="avalibleBox">
                        <div className="greenDot"></div>
                        <h4>Avalible For <span className="purpleText">Opportunities</span></h4>
                    </div>
                    <div className="details">
                        <h2>Hi, I'm</h2>
                        <h1> <span className="purpleText">Muhammad Awais Khan</span></h1>
                        <h2 className="animationText">{displayText}<span className="typingCursor purpleText">|</span></h2>

                        <p>IT student passionate about building modern, scalable and user-friendly digital solutions.</p>
                    </div>
                    <div className="links">
                        <NavLink to="/projects">
                            <div className="link">
                                <h4 className="textIcon">🔥</h4>
                                <h4>Check my <span className="purpleText">Projects</span></h4>
                            </div>
                        </NavLink>
                        <a href="/Resume.pdf" download>
                            <div className="link">
                                <h4 className="textIcon">🎓</h4>
                                <h4>Download my <span className="purpleText">Resume</span></h4>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="profileDetails">
                    <div className="profile">
                        <div className="profile-1">
                            <div className="profileImgDiv">

                            </div>
                            <div className="profileNameDiv">
                                <div className="profileAvalible">
                                    <div className="dot"></div>
                                    <h5>Avalible</h5>
                                </div>
                                <h4>Muhammad Awais Khan</h4>
                                <p>Full Stack Developer</p>
                            </div>
                        </div>
                        <div className="profile-2">
                            <div className="dotsDiv">
                                <div className="dots2 green"></div>
                                <div className="dots2 yellow"></div>
                                <div className="dots2 red"></div>
                            </div>
                            <hr className="line" />
                            <div className="codeDiv">
                                <div>
                                    <span className="purple">const</span>
                                    <span className="white"> developer </span>
                                    <span className="white">=</span>
                                    <span className="white"> &#123;</span>
                                </div>

                                <div className="codeLine">
                                    <span className="blue">name</span>
                                    <span className="white">: </span>
                                    <span className="cyan">"Muhammad Awais Khan"</span>
                                    <span className="white">,</span>
                                </div>

                                <div className="codeLine">
                                    <span className="blue">role</span>
                                    <span className="white">: </span>
                                    <span className="cyan">"Full Stack Developer"</span>
                                    <span className="white">,</span>
                                </div>

                                <div className="codeLine">
                                    <span className="blue">passion</span>
                                    <span className="white">: </span>
                                    <span className="cyan">"Building useful software"</span>
                                </div>

                                <div>
                                    <span className="white">&#125;;</span>
                                    <span className="typingCursor purpleText">|</span>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div className="homeSection2">
                <div className="mainHeading">
                    <h1>  My Profectional <span className="purpleText">Skills Set</span></h1>
                </div>
                <div className="skillsDiv">
                    <Skill icon={<IoLogoJavascript />} text={"Java Script"} />
                    <Skill icon={<FaReact />} text={"React JS"} />
                    <Skill icon={< FaNode />} text={"Node JS"} />
                    <Skill icon={< SiExpress />} text={"Express JS"} />
                    <Skill icon={< TbApi />} text={"Rest API"} />
                    <Skill icon={< SiMysql />} text={"My SQl"} />
                    <Skill icon={< SiPrisma />} text={"Prisma"} />
                    <Skill icon={< FaGitAlt />} text={"Git GitHub"} />
                </div>

            </div>
            <div className="homeSection3">
                <NavLink to="/about" >
                    <div className="redirectDiv">
                        <div className="redirectPart1">
                            <div className="imgDiv">

                            </div>
                        </div>
                        <div className="redirectPart2">
                            <h3><span className="purpleText">Learn More About Me</span></h3>
                            <p>Click here to know more about my background, journey and experience</p>
                        </div>
                        <div className="redirectPart3">
                            <div className="arrowDiv">
                                <CiLocationArrow1 />

                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="homeSection4">
                <div className="mainHeading">
                    <h1>Offering Profectional <span className="purpleText">Services</span></h1>
                </div>
                <div className="animationDiv">
                    <div className="serviceDiv">
                        <div className="servicePart1">
                            <h2><span className="purpleText">Full Stack Web Application</span></h2>
                            <p>Modern and responsive frontend interfaces for all devices.</p>
                            <p>Secure and scalable backend systems with efficient database management.</p>
                            <p>REST API development and seamless third-party API integration.</p>
                            <p>Custom admin panels for efficient content and user management.</p>
                            <p>Secure media upload functionality for images, videos, and documents.</p>
                            <p>Token-based authentication with role-based access control.</p>
                            <p>Deployment and hosting of production-ready web applications.</p>
                            <p>Git and GitHub for reliable version control and code management.</p>
                            <div className="redirectServices">
                                <NavLink to="/services">
                                <div className="redirectButton">
                                    <h6>
                                        <span className="purpleText">
                                            View All Services

                                        </span>
                                    </h6>
                                    <div className="arrowDiv">
                                        <CiLocationArrow1 />
                                    </div>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="servicePart2">
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
export default Home;