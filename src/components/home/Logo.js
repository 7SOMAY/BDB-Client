import {motion} from "framer-motion";
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import React from "react";
import {Link} from "react-router-dom";

const Logo = ({path}) => {
    return (
        <Link to={path}>
            <motion.div
                className={`cursor-pointer justify-center p-1 flex ${path === '/home' ? '' : 'absolute'} border-[0.1rem] rounded-full border-white top-3 left-3 lg:top-10 lg:left-10`}
                whileHover={{scale: 1.04}}
                whileTap={{scale: 0.99}}
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 4, type: 'spring', stiffness: 200}}
            >
                <div className={'flex justify-center items-center h-7 w-7 bg-white rounded-full'}>
                    <FiberSmartRecordIcon sx={{
                        color: '#645CBB',
                        fontSize: 20,
                    }}/>
                </div>
                <p className="text-white mx-2 items-center flex text-lg font-bold">BDB</p>
            </motion.div>
        </Link>
    )
}

export default Logo;