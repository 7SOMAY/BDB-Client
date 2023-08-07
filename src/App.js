import PageRoutes from "./components/routes";
import {useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Navbar from "./components/navbar";
import FootBar from "./components/foobar";
import toast, {Toaster} from "react-hot-toast";
import {loadHome} from "./redux/actions/user";


// const location = window.location.pathname;
// const temp = location.replace("/home", "");
// const page = temp.replace("/", "");

export default function App() {
    const {isAuthenticated, user, error, message} = useSelector((state) => state.user);
    // const [pages, setPages] = useState(page);
    const [pages, setPages] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (error && error !== "Not Logged In") {
            toast.error(error);
            dispatch({type: "CLEAR_ERROR"});
        }
        if (message) {
            toast.success(message);
            dispatch({type: "CLEAR_MESSAGE"});
        }
    }, [error, message, dispatch]);
    useEffect(() => {
        dispatch(loadHome());
    }, [dispatch]);

    return (
        <Router>
            {isAuthenticated && <Navbar user={user} updatePage={setPages}/>}
            <PageRoutes page={pages} isAuthenticated={isAuthenticated} user={user}/>
            {isAuthenticated && <FootBar page={pages} setPage={setPages}/>}
            <Toaster/>
        </Router>
    );
}
