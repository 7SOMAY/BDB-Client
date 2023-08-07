import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/actions/user";


const Navbar = ({updatePage, title, user}) => {
    const [click, setClick] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();


    return (
        <div
            className={'flex flex-row top-0 fixed text-white justify-between w-full cursor-pointer py-2 px-4 bg-gradient-to-r from-primary to-[#A084DC] z-10'}>
            <div className={'text-2xl flex gap-2 items-center top-0  hover:scale-105 duration-200'}
                 onClick={() => {
                     updatePage('home');
                     navigate('/home');
                 }}>
                <HomeIcon sx={{
                    fontSize: '2.4rem',
                }}/>
                <h1 className={' font-bold'}>{title}</h1>
            </div>
            <div className={'flex gap-2 items-center duration-500'}
                 onClick={() => {
                     setClick(!click);
                 }}
                 onMouseLeave={() => {
                     if (clicked !== true) setHover(false);
                 }}>
                <div className={`duration-300 z-10 ${hover ? '' : 'translate-x-16'}`}
                     onMouseEnter={() => {
                         setHover(true);
                     }}>
                    <AccountCircleIcon
                        sx={{
                            fontSize: `2.4rem`,
                            cursor: 'pointer',
                        }}/>
                </div>
                <div>
                    <div
                        className={`text-md duration-300 font-bold ${hover ? 'opacity-100' : 'opacity-0'} cursor-pointer`}
                        onClick={() => {
                            setClicked(!click);
                        }}>
                        <h1>{user.user.name}</h1>
                    </div>
                </div>
            </div>
            <h6 className={`${clicked ? 'visible' : 'hidden'} text-xs hover:scale-105 duration-100 font-semibold absolute top-16 right-3 text-primary cursor-pointer`}
                onClick={() => {
                    dispatch(logout());
                }}>
                Sign out
            </h6>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'BDB',
    user: {
        user: {
            name: 'User'
        }
    }
}

export default Navbar