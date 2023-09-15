import React, {useState} from "react";
import Timer from "./Timer";
import {motion} from "framer-motion";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import {useDispatch} from "react-redux";
import {deleteAppliance, updateApplianceStatus} from "../../redux/actions/room";
import toast from "react-hot-toast";


const Card = ({
                  title,
                  isLoading,
                  isDeleting,
                  setIsDeleting,
                  roomId,
                  applianceId,
                  applianceStatus,
                  startTime,
                  isUpdating,
                  isAdding
              }) => {
    const [toggle, setToggle] = useState(applianceStatus === 'on');
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();

    let sec = 0;
    let min = 0;
    let hour = 0;

    if (toggle) {
        let time = Math.trunc((Date.now() - startTime) / 1000);
        sec = time % 60;
        time = (time - sec) / 60;
        min = time % 60;
        time = (time - min) / 60;
        hour = time % 60;
    }

    return (
        <motion.div className={''}>
            {isLoading || isUpdating || isAdding?
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
                            {toggle && <Timer sec={sec} min={min} hour={hour}/>}
                        </div>

                        {/*Toggle Button*/}
                        <div className="flex flex-col justify-between">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value={''} className="sr-only peer"/>
                                <div onClick={() => {
                                    setToggle(!toggle);
                                    dispatch(updateApplianceStatus(roomId, applianceId, !toggle)).then(() => {
                                        toast.success('Appliance status updated successfully!');
                                    });
                                    setIsDeleting(false);
                                }}
                                     className={`w-11 h-6 rounded-full dark:bg-white ${toggle ? 'bg-white after:translate-x-full after:duration-300 after:border-white' : ''} after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-card after:rounded-full after:h-5 after:w-5 after:transition-all bg-gray-200 peer-focus:outline-none peer`}></div>
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
                                        onClick={async () => {
                                            await dispatch(deleteAppliance(roomId, applianceId));
                                            toast.success('Appliance deleted successfully!');
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