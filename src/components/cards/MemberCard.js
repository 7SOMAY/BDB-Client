import React, {useEffect} from 'react';
import {motion} from 'framer-motion';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, exitHome} from "../../redux/actions/user";
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import svgPath from "../../assets/spinner.svg";
import WarningIcon from '@mui/icons-material/Warning';
import toast, {Toaster} from "react-hot-toast";

const MemberCard = ({name, isLoading, currUser, id, handleAdminDelete, userRole, adminCount, userCount}) => {
    const [isHovering, setIsHovering] = React.useState(false);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const {user} = useSelector((state) => state.user);
    const dispatch = useDispatch();


    const handleDelete = () => {
        if(userCount === 1){
            toast.error("You cannot leave the BDB alone!");
        }
        if(userRole === 'admin' && name === user.user.name){
            if(adminCount !== 1){
                dispatch(exitHome());
            }
            return;
        }
        if (user.user.role === 'admin') {
            if (userRole === 'admin') {
                toast.error("You cannot delete an admin!");
                return;
            }
            dispatch(deleteUser(id));
        } else {
            dispatch(exitHome());
        }
        setIsHovering(false);
        setIsDeleting(false);
    }


    return (
        <>
            {isDeleting && isHovering &&
                <motion.h2
                    className="bg-[#FDF7ED] flex border-[1px] gap-4 items-center border-[#e4d2a6] p-2 px-3 rounded-lg text-sm font-normal fixed text-[#34373B] top-16"
                    initial={{
                        opacity: 0,
                        y: -20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{duration: 0.1}}
                >
                    <div className={'text-white p-[4px] rounded-lg bg-[#dca860]'}><WarningIcon/></div>
                    <div>Are you sure?</div>
                </motion.h2>
            }
            <motion.div className={'flex flex-col items-center relative gap-8 mx-2'}
                        onMouseEnter={() => {
                            setIsHovering(true);
                        }}
                        onMouseLeave={() => {
                            setIsHovering(false);
                            setIsDeleting(false);
                        }}
                        whileHover={{scale: 1.05}}
                // whileTap={{scale: 0.95}}
                        transition={{duration: 0.2}}
            >
                <motion.div
                    className={`w-48 h-48 bg-gradient-to-r from-[#A66CFF] to-[#9C9EFE] ${isLoading ? 'animate-pulse' : ''} text-white shadow-lg rounded-full p-4 flex justify-center`}
                    onClick={() => {
                        // MemberCard is clickable
                    }}
                >
                    <div className="flex flex-col h-full w-2/3 justify-center items-center">
                        {userRole === 'admin' && <h1 className="text-md font-light absolute mb-20">Admin</h1>}
                        <h1 className={`text-3xl font-extrabold capitalize`}>{name}</h1>
                        {currUser && userRole !== 'admin' && <h1 className="text-md font-light absolute mb-20">You</h1>}
                    </div>
                </motion.div>

                {
                    isHovering && (
                        (currUser || user.user.role === 'admin') && (
                            <>
                                {isDeleting ?
                                    <>
                                        <div className={'flex flex-row absolute gap-4'}>
                                            <motion.button
                                                className={'text-white hover:bg-green-400 duration-100 border-[2px] border-white h-10 w-10 flex justify-center items-center rounded-full mt-32'}
                                                whileTap={{scale: 0.80}}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                transition={{duration: 0.4}}
                                                onClick={() => {
                                                    userRole === 'admin' && adminCount === 1 && userCount !== 1 ? handleAdminDelete(true) : handleDelete(userRole);
                                                    setIsDeleting(false);
                                                }}>
                                                {isLoading ? <img src={svgPath} className="animate-spin h-5 w-5 mr-3"
                                                                  alt={'loader'}></img> : <DoneIcon/>}
                                            </motion.button>
                                            <motion.button
                                                className={'text-white hover:bg-red-400 duration-100 border-[2px] border-white h-10 w-10 flex justify-center items-center rounded-full mt-32'}
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
                                    <motion.button
                                        className={'text-white border-[2px] border-white h-10 w-10 flex justify-center items-center rounded-full absolute bottom-2'}
                                        whileTap={{scale: 0.80}}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{duration: 0.4}}
                                        onClick={() => {
                                            setIsDeleting(true);
                                        }}>
                                        <DeleteIcon/>
                                    </motion.button>
                                }
                            </>
                        )
                    )
                }
            </motion.div>
        </>
    );
};

MemberCard.defaultProps = {
    name: '',
    isLoading: false
}

export default MemberCard;
