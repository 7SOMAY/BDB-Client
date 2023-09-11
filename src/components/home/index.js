import React, {useEffect, useState} from 'react';
import MemberCard from "../cards/MemberCard";
import MemberItem from "../cards/MemberItem";
import {useDispatch, useSelector} from "react-redux";
import {loadAllUsers, exitHome} from "../../redux/actions/user";
import {motion} from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';


const Home = () => {
    // const numberOfCards = useSelector((state) => state.user.users.length);

    const dispatch = useDispatch();


    const {users} = useSelector((state) => state.user);

    let numberOfCards;
    if (users) {
        numberOfCards = users.length;
    } else {
        numberOfCards = 3;
    }

    // const [deleting, setDeleting] = useState(false);
    const [deleteAdmin, setDeleteAdmin] = useState(false);






    const isLoading = useSelector((state) => state.user.loading);
    const isDeleting = useSelector((state) => state.user.deleting);
    const arr = Array.from({length: numberOfCards});


    useEffect(() => {
        dispatch(loadAllUsers());
    }, [isDeleting, dispatch]);

    const {user} = useSelector((state) => state.user);

    return (
        <>
            <motion.div className="py-24 sm:p-6">
                {
                    isLoading ?
                        <>
                            <div className="flex flex-wrap justify-center gap-4">
                                {arr && arr.map((_, index) => (
                                    <MemberCard key={index} isLoading={true}/>
                                ))}
                            </div>
                        </>
                        :
                        <>
                            <div className="flex flex-wrap justify-center gap-4">
                                {users && users.map(member => (
                                    <>
                                        <MemberCard key={member._id}
                                                    id={member._id}
                                                    currUser={member.name === user.user.name}
                                                    name={member.name}
                                                    handleAdminDelete={setDeleteAdmin}
                                                    userRole={member.role}
                                        />
                                    </>
                                ))}
                            </div>
                        </>
                }
            </motion.div>
            {deleteAdmin &&
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 z-50 flex justify-center items-center">
                    <motion.div className="relative bg-white rounded-lg p-1 items-center flex flex-col">
                        {
                            isLoading ?
                                <motion.div className={'cursor-not-allowed absolute right-1 top-1 text-primary rounded-full'}>
                                    <CloseIcon className={'mb-1'}/>
                                </motion.div>
                                :
                                <motion.div
                                    className={'cursor-pointer absolute right-1 top-1 text-primary rounded-full'}
                                    onClick={() => {
                                        setDeleteAdmin(false);
                                    }}
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                >
                                    <CloseIcon className={'mb-1'}/>
                                </motion.div>
                        }
                        <h2 className={'m-4 font-semibold'}>Make new Admin</h2>
                        {users && users.map(member => (
                            <>
                                {member.role === 'user' && (
                                    <MemberItem key={member._id}
                                                id={member._id}
                                                name={member.name}
                                                isLoading={isLoading}
                                    />
                                )}
                            </>
                        ))}
                    </motion.div>
                </div>
            }
        </>
    );
};

export default Home;
