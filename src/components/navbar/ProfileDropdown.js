import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {logout} from "../../redux/actions/user";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileDropdown = ({toggle,setToggle}) => {
    const [isOpen, setIsOpen] = useState(toggle);
    const dispatch = useDispatch();
    const {role} = useSelector((state) => state.user.user.user);


    useEffect(() => {
        setIsOpen(toggle);
    }, [toggle]);

    return (
        <div className="relative top-7 inline-block text-left">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.2}}
                        className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    >
                        <div
                            className="py-1 text-gray-700"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                                <Link className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" onClick={()=>setToggle(!toggle)} to={'/home/profile'}>Your Profile</Link>
                            {role === 'admin' && <Link
                                className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                                to={'/home/dashboard'} onClick={() => setToggle(!toggle)}>Dashboard</Link>}
                            <p className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" onClick={()=> {
                                dispatch(logout());
                                setToggle(!toggle);
                            }}>
                                Sign out
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProfileDropdown;
