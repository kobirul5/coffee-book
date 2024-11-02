import { Outlet } from "react-router-dom";
import Footer from "../../compnents/Footer";
import Navbar from "../../compnents/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)] container mx-auto px-5">
            {/* dynamic */}
            <Outlet></Outlet>

            </div>
            {/* footer */}
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;