import "./layout.css";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

function Layout(){
    return(
        <>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        
        </>
    )


}
export default Layout;