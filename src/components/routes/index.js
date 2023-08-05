import {Routes, Route} from "react-router-dom";

import Home from "../home";
import Navbar from "../navbar";
import AnimeshHarshit from "../pages/AnimeshHarshit";
import DSA from "../pages/DSA";
import Kitchen from "../pages/Kitchen";
import DiningHall from "../pages/DiningHall";
import SainiSomay from "../pages/SainiSomay";
import FootBar from "../foobar";
import {useState} from "react";
import Register from "../auth/Register";
import Login from "../auth/Login";




const location = window.location.pathname;
const temp = location.replace("/home", "");
const page = temp.replace("/", "");

export default function PageRoutes() {
    const [pages, setPages] = useState(page);
    const [isAuth, setIsAuth] = useState(true);
    return (
        <>
            {isAuth && (<Navbar profile={'Somay'} updatePage={setPages} setAuth={setIsAuth}/>)}
            <Routes>
                <Route path="/login" element={<Login setAuth={setIsAuth}/>}/>
                <Route path="/register" element={<Register setAuth={setIsAuth}/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/home/Kitchen" element={<Kitchen/>}/>
                <Route path="/home/AnimeshHarshit" element={<AnimeshHarshit/>}/>
                <Route path="/home/DsaBhaggu" element={<DSA/>}/>
                <Route path="/home/SainiSomay" element={<SainiSomay/>}/>
                <Route path="/home/DiningHall" element={<DiningHall/>}/>
            </Routes>
            {isAuth && (<FootBar page={pages} setPage={setPages}/>)}
        </>
    );
}
