import {motion} from "framer-motion";
import React, {useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import {useDispatch, useSelector} from "react-redux";
import {addAppliance} from "../../redux/actions/room";
import toast from "react-hot-toast";

const Add = ({roomId}) => {
    const [isAdding, setIsAdding] = useState(false);
    const [applianceName, setApplianceName] = useState('');

    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);

    const handleInputChange = (e) => {
        setApplianceName(e.target.value);
    }

    const handleAddAppliance = () => {
        if (applianceName.length) {
            console.log(applianceName.length);
            setApplianceName('');
            dispatch(addAppliance(roomId, applianceName, user.user.name)).then(() => {
                toast.success('Appliance added successfully');
            });
            setIsAdding(false);
        }
        else {
            toast.error('Appliance name cannot be empty');
        }
    }

    return (
        <>
            {isAdding ? <>
                <div className={'h-full w-screen bg-black bg-opacity-25 z-50 fixed flex justify-center items-center top-0'}>
                    <div className="m-4 relative bg-white p-6 rounded-lg">
                        <motion.div
                            className={'cursor-pointer absolute right-1 top-1 text-primary rounded-full'}
                            onClick={() => {
                                setIsAdding(false);
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            <CloseIcon className={'mb-1'}/>
                        </motion.div>
                        <h2 className="text-xl font-bold mb-4 text-gray-700">Add Appliance</h2>
                        <motion.form className="flex gap-4 mb-4" onSubmit={handleAddAppliance}>
                            <input
                                type="text"
                                value={applianceName}
                                onChange={handleInputChange}
                                className="px-3 py-1 border rounded-l focus:outline-card"
                                placeholder="appliance"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleAddAppliance}
                                className={`px-4 py-2 bg-gradient-to-r from-[#A66CFF] to-[#9C9EFE] text-white rounded-md`}
                            >
                                Add
                            </motion.button>
                        </motion.form>
                    </div>
                </div>
            </> : <>
                <motion.button
                    className={'bg-gradient-to-r from-[#A66CFF] to-[#9C9EFE] text-white h-10 w-10 flex justify-center items-center rounded-full'}
                    onClick={() => setIsAdding(true)}
                    whileHover={{scale: 1.04}}
                    whileTap={{scale: 0.96}}
                >
                    <span className={'text-2xl font-light mb-[4px]'}>+</span>
                </motion.button>
            </>}
        </>
    )
}

export default Add

