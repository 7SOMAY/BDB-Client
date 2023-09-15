import React, {useState} from "react";
import Timer from "./Timer";
import {motion} from "framer-motion";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import {useDispatch} from "react-redux";
import {deleteAppliance} from "../../redux/actions/room";


const Card = ({title, isLoading, isDeleting, setIsDeleting, roomId, applianceId}) => {
    const [toggle, setToggle] = useState(false);
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();

    return (
        <motion.div className={''}>
            {isLoading ?
                <div
                    className={`animate-pulse hover:scale-[1.05] cursor-pointer mx-auto bg-gradient-to-r from-[#A66CFF] to-[#9C9EFE] text-white h-36 w-64 min-[420px]:h-40 min-[420px]:w-60 duration-300 shadow-lg rounded-2xl p-4 flex justify-between`}></div>
                :
                <div className={'flex justify-center'}>
                    <div
                        className={`hover:scale-[1.05] cursor-pointer mx-auto bg-gradient-to-r from-[#A66CFF] to-[#9C9EFE] text-white h-36 w-64 min-[420px]:h-40 min-[420px]:w-60 duration-300 shadow-lg rounded-2xl p-4 flex justify-between`}
                        onMouseEnter={() => {
                            setHover(true)
                        }} onMouseLeave={() => {
                        setHover(false);
                        setIsDeleting(false);
                    }}>
                        {/*Card Content*/}
                        <div
                            className={`${toggle ? 'justify-between bg-transparent text-white' : 'justify-center items-center'} flex flex-col h-full w-2/3 duration-300 p-3 rounded-2xl ${hover ? '' : (toggle ? 'bg-transparent' : 'bg-white text-card')}`}> {/*${hover? '' :(toggle?'bg-transparent':'bg-white text-card')}*/}
                            <h1 className="text-3xl font-extrabold capitalize">{title}</h1>
                            {toggle ? <Timer/> : null}
                        </div>

                        {/*Toggle Button*/}
                        <div className="flex flex-col justify-between">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value={''} className="sr-only peer"/>
                                <div onClick={() => {
                                    setToggle(!toggle);
                                    setIsDeleting(false);
                                }}
                                     className={`w-11 h-6 rounded-full dark:bg-white peer-checked:after:translate-x-full peer-checked:after:duration-300 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-card after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white bg-gray-200 peer-focus:outline-none peer`}></div>
                            </label>
                            <h4 className={'text-lg font-semibold'}> {toggle ? "ON" : "OFF"} </h4>
                        </div>


                        {isDeleting && hover && !toggle ?
                            <>
                                <div className={'flex flex-row absolute min-[420px]:gap-2'}>
                                    <motion.button
                                        className={'text-white hover:bg-green-400 duration-100 border-[2px] border-white h-10 w-10 flex justify-center items-center rounded-full scale-90 min-[420px]:scale-100 relative -left-2 top-20 min-[420px]:top-24'}
                                        whileTap={{scale: 0.80}}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{duration: 0.4}}
                                        onClick={() => {
                                            dispatch(deleteAppliance(roomId, applianceId));
                                            setIsDeleting(false);
                                        }}>
                                        <DoneIcon/>
                                    </motion.button>
                                    <motion.button
                                        className={'text-white hover:bg-red-400 duration-100 border-[2px] border-white h-10 w-10 flex justify-center items-center rounded-full scale-90 min-[420px]:scale-100 relative top-20 min-[420px]:top-24'}
                                        whileTap={{scale: 0.80}}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{duration: 0.4}}
                                        onClick={() => {
                                            setIsDeleting(false);
                                        }}>
                                        <ClearIcon/>
                                    </motion.button>
                                </div>
                            </>
                            :
                            <>
                                {(hover && !toggle) && <motion.button
                                    className={'text-white border-[2px] border-white h-10 w-10 flex justify-center items-center rounded-full scale-90 min-[420px]:scale-100 absolute bottom-2 left-2'}
                                    whileTap={{scale: 0.80}}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.4}}
                                    onClick={() => {
                                        setIsDeleting(true);
                                    }}>
                                    <DeleteIcon/>
                                </motion.button>}
                            </>
                        }
                    </div>
                </div>}
        </motion.div>
    )
}

Card.defaultProps = {
    title: 'Name'
}

export default Card