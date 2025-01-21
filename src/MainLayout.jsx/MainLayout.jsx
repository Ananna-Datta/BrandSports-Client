import { Outlet } from "react-router-dom";
import Navber from "../Componenets/Navber";
import Footer from "../Componenets/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navber></Navber>
            <div className="h-100vh overflow-y-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;