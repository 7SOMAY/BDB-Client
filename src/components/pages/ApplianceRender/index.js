import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {loadAllRooms} from "../../../redux/actions/room";
import Card from "../../cards";
import Add from "../../cards/Add";
import {motion} from "framer-motion";
import WarningIcon from "@mui/icons-material/Warning";

const AppliancesRender = ({roomName}) => {

    const arr = Array.from({length: 1});
    const dispatch = useDispatch();

    const adding = useSelector((state) => state.room.adding);
    const deleting = useSelector((state) => state.room.deleting);
    const loading = useSelector((state) => state.room.loading);

    useEffect(() => {
        dispatch(loadAllRooms());
    }, [dispatch, adding, deleting]);

    const {rooms} = useSelector((state) => state.room);



    const [isDeleting, setIsDeleting] = useState(false);

    let roomId;
    let data = [];
    rooms && rooms.map((i) => (
        i.name === roomName && data.push(i.appliances) && (roomId = i._id)
    ));

    return (
        <div className={'py-24 min-[420px]:px-20 min-[420px]:pb-20 flex flex-col items-center justify-center'}>
            {loading ?
                <div className={'px-3 flex justify-center items-center gap-6 flex-wrap py-6 sm:py-12'}>
                    {arr.map((i) => (
                        <Card key={i} title={i} isLoading={true}/>
                    ))}
                </div>
                :
                <div className={'px-3 flex justify-center items-center gap-6 flex-wrap py-6 sm:py-12'}>
                    {data[0] && data[0].map((i) => (
                        <Card key={i._id} title={i.name} roomId={roomId} applianceId={i._id} isDeleting={isDeleting} setIsDeleting={setIsDeleting}/>
                    ))}
                </div>
            }
            <Add roomId={roomId}/>

            {isDeleting && <motion.h2
                className="bg-[#FDF7ED] flex border-[1px] gap-4 items-center border-[#e4d2a6] p-2 px-3 rounded-lg text-sm font-normal absolute text-[#34373B] top-16"
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
            </motion.h2>}
        </div>
    )
}

export default AppliancesRender