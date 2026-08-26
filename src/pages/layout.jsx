import "./layout.css";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";
function Layout(){
    return(
        <>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
        
        </>
    )


}
export default Layout;