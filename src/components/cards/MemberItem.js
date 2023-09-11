import {useDispatch} from "react-redux";
import {exitHome, updateRole} from "../../redux/actions/user";
import {LoaderIcon} from "react-hot-toast";
import {useEffect, useState} from "react";

const MemberItem = ({id, name, handleAdminDelete, isLoading}) => {
    const dispatch = useDispatch();
    const [Load, setLoad] = useState(false);

    const makeAdmin = async () => {
        await dispatch(updateRole(id));
        dispatch(exitHome());
    }
    return (
        <div className="flex items-center relative justify-between capitalize gap-4 hover:bg-purple-100 rounded-lg py-2 px-3  cursor-pointer"
            onClick={() => {
                makeAdmin();
                if(!isLoading) setLoad(true);
            }}>
            <div className={'flex items-center gap-3 mr-32'}>
                <div className={'h-10 w-10 bg-gradient-to-r from-[#A66CFF] to-[#9C9EFE] rounded-full text-white font-bold flex justify-center items-center'}>{name.charAt(0)}</div>
                <div className={'text-primary font-semibold'}>{name}</div>
            </div>
            <div><LoaderIcon className={`animate-spin ${Load ? '' : 'invisible'} left-3`}/></div>
        </div>
    )
}

export default MemberItem;