import "./footer.css"
import Icon from "../assets/logo.png"
import { FaGithub, FaUpwork } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { RiFiverrFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";


function Footer() {
    return (
        <>
            <div className="footerMain">
                <div className="footer1">
                    <div className="section1">
                        <div className="image">
                            <img src={Icon} alt="logo" />
                        </div>
                        <p>IT student and aspiring Full Stack Developer building useful, reliable digital experiences.</p>
                        <div className="socialMediaLinkDiv">
                            <a href="https://github.com/Awaiskhanniazi" target="_blank" rel="noopener noreferrer">
                                <div className="socialMediaLink">
                                    <FaGithub />

                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/awais-khan-9ba71b374" target="_blank" rel="noopener noreferrer">
                                <div className="socialMediaLink">
                                    <GrLinkedinOption />

                                </div>
                            </a>
                            <a href="https://www.fiverr.com/s/L3e6EqQ" target="_blank" rel="noopener noreferrer">
                                <div className="socialMediaLink">
                                    <RiFiverrFill />

                                </div>
                            </a>
                            <a href="https://x.com/Awaiskh05031827" target="_blank" rel="noopener noreferrer">
                                <div className="socialMediaLink">
                                    <BsTwitterX />

                                </div>
                            </a>
                            <a href="https://www.upwork.com/freelancers/~01ec37a0bb7c5780e0" target="_blank" rel="noopener noreferrer">
                                <div className="socialMediaLink">
                                    <FaUpwork />

                                </div>
                            </a>

                        </div>


                    </div>
                    <div className="section2">
                        <h4>Quick Links</h4>
                        <div className="links">
                            <NavLink to="/" className="footerLinks">
                                Home
                            </NavLink>
                            <NavLink to="/about" className="footerLinks">
                                About
                            </NavLink>
                            <NavLink to="/projects" className="footerLinks">
                                Projects
                            </NavLink>
                            <NavLink to="/services" className="footerLinks">
                                Services
                            </NavLink>
                        </div>

                    </div>

                    <div className="section3">
                        <h4>Services</h4>
                        <div className="links">
                            <NavLink to="/services" className="footerLinks">
                                Full Stack Development
                            </NavLink>
                            <NavLink to="/services" className="footerLinks">
                                REST API
                            </NavLink>
                            <NavLink to="/services" className="footerLinks">
                                Website Maintanance
                            </NavLink>
                            <NavLink to="/services" className="footerLinks">
                                Database Design
                            </NavLink>

                        </div>

                    </div>

                    <div className="section4">
                        <h4>Contact</h4>
                        <div className="links">
                            <div className="contactLinks">
                                <div className="contactIcon">
                                    <MdOutlineEmail />
                                </div>
                                <p>
                                    awaiskhanniazi2233@gmail.com
                                </p>
                            </div>
                            <div className="contactLinks">
                                <div className="contactIcon">
                                    <FaPhoneAlt />
                                </div>
                                <p>
                                    +92 3099181916
                                </p>
                            </div>
                            <div className="contactLinks">
                                <div className="contactIcon">
                                    <IoLocationSharp />
                                </div>
                                <p>
                                    Mianwali,Punjab Pakistan
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="footer2">
                    <p>© 2026 Awais Khan. All Rights Reserved.</p>
                    <p>Designed & Developed by Awais Khan</p>

                </div>
            </div>

        </>
    )

}
export default Footer;