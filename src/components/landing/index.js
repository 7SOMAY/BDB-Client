import React from 'react';
import {motion} from 'framer-motion';
import imageSrc from '../../assets/Home-Automator.jpg';
import {Link} from 'react-router-dom';
import Logo from "../home/Logo";

const LandingPage = () => {
    return (
        <div
            className="min-h-screen absolute flex items-center w-screen bg-gradient-to-r from-[#645CBB] to-[#A084DC] py-20 px-4 sm:px-6 lg:px-8">
            <Logo path={'/'}/>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="max-w-4xl mx-auto"
            >
                <div className="flex justify-center items-center mb-6">
                    <motion.h1
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.3}}
                        className="text-3xl md:text-5xl font-semibold text-white text-center"
                    >
                        <p className={'flex text-4xl md:text-5xl flex-col md:flex-row gap-4'}>
                            <span className={'flex items-center justify-center'}>Welcome to</span>
                            <span
                                className="cursor-pointer font-extrabold border-2 hover:rounded-none duration-200 rounded-2xl p-2 text-white">Home Automator</span>
                        </p>
                    </motion.h1>
                </div>
                <p className="text-md sm:text-lg text-white text-center mb-12 font-sans">
                    Your all-in-one smart home automation solution!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        className={'p-3 sm:p-0'}
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        whileHover={{scale: 1.02}}
                        transition={{duration: 0.3}}
                    >
                        <img
                            src={imageSrc}
                            alt="Home Automator"
                            className="w-full rounded-full shadow-lg"
                        />
                    </motion.div>
                    <motion.div
                        className={'flex flex-col justify-center items-center p-3 sm:p-0'}
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        <p className="text-white text-md sm:text-lg mb-4">
                            Imagine a world where your home responds to your every need, no matter where you are.
                            Welcome to the future of smart living with the Smart Home Automator, a groundbreaking
                            project that empowers you to control your home appliances remotely from anywhere in the
                            world.
                        </p>
                        <p className="text-white text-md sm:text-lg mb-4">
                            Whether you're at work, on vacation, or simply on the go, the Smart Home Automator
                            puts the power of your home in the palm of your hand.
                        </p>
                        <div className="flex justify-center mt-8">
                            <Link
                                to={'/login'}
                                className="bg-white text-primary font-semibold py-3 px-6 rounded-lg shadow-md mr-4 hover:bg-gray-200 transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                to={'/register'}
                                className="border-2 border-white duration-300 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-white hover:text-primary transition-colors"
                            >
                                Register
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default LandingPage;
