import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";
import "./navbar.css"
import { useState, useEffect } from 'react';
import { MdOutlineHome ,MdMiscellaneousServices} from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgGitFork } from "react-icons/cg";
function NavBar() {
    const [navColor, setNavColor] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const scrollControl = () => {
        if (window.scrollY > 20) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollControl);

        return () => {
            window.removeEventListener("scroll", scrollControl);
        };
    }, []);
    return (
        <>
            <div className={`navbar ${navColor ? "navColor" : ""} ${openMenu ? "open" : ""}`}>
                <div className="left">
                    <div className="logoImage">
                        <img src={logo} alt="" />
                    </div>
                    <div className="hamburger" onClick={() => setOpenMenu(!openMenu)} >
                    <GiHamburgerMenu />
                </div>
                </div>
                <div className={openMenu ? "right open" : "right"}>
                    <div className="navLinks">
                        <NavLink to="/" className="links">
                            <div className="linksDiv" onClick={() => setOpenMenu(false)}>
                                <MdOutlineHome />
                                <h3>Home</h3>
                                
                            </div>
                        </NavLink>
                        <NavLink to="/about" className="links" onClick={() => setOpenMenu(false)}>
                            <div className="linksDiv">
                                <GoPerson />
                                <h3>About</h3>
                                
                            </div>
                        </NavLink>
                        <NavLink to="/projects" className="links" onClick={() => setOpenMenu(false)}>
                            <div className="linksDiv">
                                <FaLaptopCode />
                                <h3>Projects</h3>
                            </div>
                        </NavLink>
                        <NavLink to="/services" className="links" onClick={() => setOpenMenu(false)}>
                            <div className="linksDiv">
                                <MdMiscellaneousServices />
                                <h3>Services</h3>
                            </div>
                        </NavLink>
                    </div>
                    <div onClick={() => {
                        window.open("https://github.com/Awaiskhanniazi/Portfolio-React", "_blank")
                    }} className="linkedin">
                        <CgGitFork className='gitIcon' />
                        <FaStar />
                    </div>



                </div>
                




            </div>
        </>
    )

}
export default NavBar;