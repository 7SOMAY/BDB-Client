import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from "./components/home";
import Navbar from "./components/navbar";
import AnimeshHarshit from "./components/pages/AnimeshHarshit";
import DSA from "./components/pages/DSA";
import Kitchen from "./components/pages/Kitchen";
import DiningHall from "./components/pages/DiningHall";
import SainiSomay from "./components/pages/SainiSomay";
import FootBar from "./components/foobar";
import {useState} from "react";


export default function App() {

    const [pages, setPages] = useState('home');
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/home/Kitchen" element={<Kitchen/>}/>
                <Route path="/home/AnimeshHarshit" element={<AnimeshHarshit/>}/>
                <Route path="/home/DsaBhaggu" element={<DSA/>}/>
                <Route path="/home/SainiSomay" element={<SainiSomay/>}/>
                <Route path="/home/DiningHall" element={<DiningHall/>}/>
            </Routes>
            <FootBar page={pages} setPage={setPages}/>
        </Router>
    );
}
