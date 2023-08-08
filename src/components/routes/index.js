import {Routes, Route} from "react-router-dom";

import Home from "../home";
import Register from "../auth/Register";
import Login from "../auth/Login";
import {ProtectedRoute} from "protected-route-react";
import LandingPage from "../landing";
import Kitchen from "../pages/Kitchen";
import AnimeshHarshit from "../pages/AnimeshHarshit";
import DSA from "../pages/DSA";
import SainiSomay from "../pages/SainiSomay";
import DiningHall from "../pages/DiningHall";
import ProfilePage from "../home/ProfilePage";
import Dashboard from "../home/Dashboard";

export default function PageRoutes({isAuthenticated = false, user, page}) {

    return (
        <Routes>
            <Route path="/" element={
                <ProtectedRoute isAuthenticated={!isAuthenticated} redirect={"/home"}>
                    <LandingPage/>
                </ProtectedRoute>
            }/>

            {/*------------------------------Auth--------------------------------------------*/}
            <Route path="/login" element={
                <ProtectedRoute isAuthenticated={!isAuthenticated} redirect={`/home`}>
                    <Login/>
                </ProtectedRoute>
            }/>
            <Route path="/register" element={
                <ProtectedRoute isAuthenticated={!isAuthenticated} redirect={"/home"}>
                    <Register/>
                </ProtectedRoute>
            }/>
            {/*------------------------------Auth--------------------------------------------*/}
            <div className="py-24">
                <Route path="/home" element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Home isAuthenticated={isAuthenticated}/>
                    </ProtectedRoute>
                }/>
                <Route path="/home/profile" element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <ProfilePage/>
                    </ProtectedRoute>
                }/>
                <Route path="/home/dashboard" element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Dashboard/>
                    </ProtectedRoute>
                }/>
                <Route path="/home/Kitchen" element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Kitchen/>
                    </ProtectedRoute>
                }/>
                <Route path="/home/AnimeshHarshit" element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <AnimeshHarshit/>
                    </ProtectedRoute>
                }/>
                <Route path="/home/DsaBhaggu" element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <DSA/>
                    </ProtectedRoute>
                }/>
                <Route path="/home/SainiSomay" element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <SainiSomay/>
                    </ProtectedRoute>
                }/>
                <Route path="/home/DiningHall" element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <DiningHall/>
                    </ProtectedRoute>
                }/>
            </div>
        </Routes>
    )
        ;
}
