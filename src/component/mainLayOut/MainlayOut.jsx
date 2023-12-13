import { Outlet } from "react-router-dom";
import Navber from "../header/navebar/Navber";
import Menubar from "../header/menubar/Menubar";


const MainlayOut = () => {
    return (
        <div className="md:max-w-6xl lg:max-w-6xl mx-auto font-raleway">
            <Menubar></Menubar>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainlayOut;