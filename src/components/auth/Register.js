import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Link} from "react-router-dom";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../redux/actions/user";
import Logo from "../home/Logo";
import svgPath from "../../assets/spinner.svg";

const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.user.loading);


    const handleUsernameChange = (e) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
    };

    const containerVariants = {
        initial: {opacity: 0},
        animate: {opacity: 1, transition: {duration: 0.5}},
        exit: {opacity: 0, transition: {duration: 0.5}},
    };

    const formVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1, transition: {duration: 0.5, delay: 0.2}},
    };

    return (
        <div
            className="flex justify-center absolute text-sm font-semibold items-center h-screen w-screen bg-gradient-to-r from-primary to-[#A084DC] font-sans z-50">
            <Logo path={'/'}/>
            <AnimatePresence>
                <motion.div
                    className="bg-white p-7 md:p-12 rounded shadow-md"
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <h2 className="text-3xl mb-4 font-extrabold text-gray-800">Register</h2>
                    <motion.form
                        onSubmit={handleRegister}
                        variants={formVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <div className="mb-4 ">
                            <label className="block text-gray-700">Username:</label>
                            <input
                                type="text"
                                className="border border-gray-400 p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder={"Username"}
                                value={name}
                                onChange={handleUsernameChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">E-mail:</label>
                            <input
                                type="email"
                                className="border border-gray-400 p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder={"E-mail"}
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password:</label>
                            <input
                                type="password"
                                className="border border-gray-400 p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder={"Password"}
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        {
                            isLoading ? (
                                <>
                                    <motion.button
                                        type="submit"
                                        className="flex bg-purple-700 items-center cursor-not-allowed text-white font-bold py-2 px-4 rounded"
                                    >
                                        <img src={svgPath} className="animate-spin h-5 w-5 mr-3" alt={'loader'}>
                                        </img>
                                        Loading...
                                    </motion.button>
                                </>
                            ) : (
                                <>
                                    <motion.button
                                        type="submit"
                                        className="block bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                        onClick={handleRegister}
                                    >
                                        Register
                                    </motion.button>
                                </>
                            )
                        }

                        <p className={'inline text-sm font-light'}>Already a <span
                            className={'font-bold'}>BDB</span> Member? Log In here</p>
                        <motion.button
                            type="submit"
                            className="text-purple-500 hover:text-purple-700 mt-7 font-bold px-1"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            <Link to={"/login"}><ArrowCircleRightRoundedIcon sx={{
                                fontSize: 40,
                            }}/></Link>
                        </motion.button>
                    </motion.form>
                </motion.div>
            </AnimatePresence>
        </div>

    );
};

export default Register;
