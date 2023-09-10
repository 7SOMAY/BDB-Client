import React from 'react';
import {motion} from 'framer-motion';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, exitHome} from "../../redux/actions/user";
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

const MemberCard = ({name, isLoading, currUser, id, isDelete}) => {
    const [isHovering, setIsHovering] = React.useState(false);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const {user} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleDelete = () => {
        isDelete(true);
        if (user.user.role === 'admin' && !currUser) {
            dispatch(deleteUser(id));
        } else {
            dispatch(exitHome());
        }
        setIsHovering(false);
        setIsDeleting(false);
    }


    return (
        <motion.div className={'flex flex-col items-center gap-8 mx-2'}
                    onMouseEnter={() => {
                        setIsHovering(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovering(false);
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
                    <h1 className={`text-3xl font-extrabold capitalize`}>{name}</h1>
                    {currUser && <h1 className="text-md font-light absolute mt-20">You</h1>}
                </div>
            </motion.div>

            {
                isHovering && (
                    (currUser || user.user.role === 'admin') && (
                        <>
                            {isDeleting ?
                                <>
                                    <h2 className="text-sm font-bold absolute text-primary top-[-30px]">Are you
                                        sure?</h2>
                                    <div className={'flex flex-row absolute gap-4'}>
                                        <motion.button
                                            className={'text-white hover:bg-green-400 duration-100 border-[2px] border-white h-10 w-10 flex justify-center items-center rounded-full mt-3'}
                                            whileTap={{scale: 0.80}}
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            transition={{duration: 0.4}}
                                            onClick={() => {
                                                handleDelete();
                                            }}>
                                            <DoneIcon/>
                                        </motion.button>
                                        <motion.button
                                            className={'text-white hover:bg-red-400 duration-100 border-[2px] border-white h-10 w-10 flex justify-center items-center rounded-full mt-3'}
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
                                    className={'text-white border-[2px] border-white h-10 w-10 flex justify-center items-center rounded-full absolute mt-1'}
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
    );
};

MemberCard.defaultProps = {
    name: '',
    isLoading: false
}

export default MemberCard;
