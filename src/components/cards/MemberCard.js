import React from 'react';
import { motion } from 'framer-motion';

const MemberCard = ({ name, isLoading }) => {
    return (
        <motion.div
            className={`w-48 h-48 bg-gradient-to-r from-[#A66CFF] to-[#9C9EFE] ${isLoading ? 'animate-pulse' : ''} text-white shadow-lg rounded-full p-4 flex justify-center cursor-pointer`}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            transition={{duration: 0.4}}
        >
            <div className="flex flex-col h-full w-2/3 justify-center items-center">
                <h1 className="text-3xl font-extrabold">{name}</h1>
            </div>
        </motion.div>
    );
};

MemberCard.defaultProps = {
    name: 'Name',
    isLoading: false
}

export default MemberCard;
