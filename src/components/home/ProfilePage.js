import React from 'react';
import { motion } from 'framer-motion';
import {useSelector} from "react-redux";

const ProfilePage = () => {
    const {user} = useSelector((state) => state.user);
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
        },
    };

    return (
        <motion.div
            className="min-h-screen bg-transparent flex justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-primary text-white shadow-md rounded-lg w-80 p-6 sm:w-96 sm:p-8">
                <motion.img
                    className="w-32 h-32 rounded-full mx-auto"
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    whileHover={{ scale: 1.05 }}

                />
                <h2 className="text-3xl font-bold text-center mt-4 capitalize">{user.user.name}</h2>
                <p className="font-semibold text-center mt-2">BDB Gang Member</p>
                <div className="mt-6">
                    <p className="mb-1">Email:</p>
                    <p className="">{user.user.email}</p>
                    <p className="mt-3 mb-1">Location:</p>
                    <p className="">Haryana, India</p>
                </div>
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.button
                        className="bg-gray-100 text-primary py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.99 }}
                        transition={{ duration: 0.1 }}
                    >
                        Edit Profile
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProfilePage;
