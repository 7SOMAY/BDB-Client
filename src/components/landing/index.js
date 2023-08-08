import React from 'react';
import {motion} from 'framer-motion';
import imageSrc from '../../assets/Home-Automator.jpg';
import {Link} from 'react-router-dom';
import Logo from "../home/Logo";

const LandingPage = () => {
    return (
        <div
            className="min-h-screen flex items-center w-screen bg-gradient-to-r from-[#645CBB] to-[#A084DC] py-20 px-4 sm:px-6 lg:px-8">
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
                            <span className="cursor-pointer font-extrabold border-2 hover:rounded-none duration-200 rounded-2xl p-2 text-white">Home Automator</span>
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
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        <p className="text-white text-md sm:text-lg mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus sit amet turpis fermentum, auctor odio et,
                            vestibulum nulla. Duis vel ligula at nisl blandit vehicula.
                            Nulla a efficitur odio, sit amet scelerisque dui.
                        </p>
                        <p className="text-white text-md sm:text-lg mb-4">
                            Vestibulum ac ex quis justo interdum eleifend id vel nulla.
                            Nunc eget massa sit amet est tempus congue ac ac dolor.
                            Suspendisse eu felis vel nulla pharetra maximus eget at tortor.
                            Curabitur suscipit posuere mauris, vel finibus odio.
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
