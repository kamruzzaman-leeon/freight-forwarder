import { Outlet } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Navbar from "../Component/Navbar";


const Main = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
        </div>
            <Outlet></Outlet>            
        </div>
    );
};

export default Main;