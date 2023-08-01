

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useState} from "react";
import {Link} from "react-router-dom";


const Navbar = ({current, title, profile}) => {
    const [click, setClick] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);


    return (
        <div
            className={'flex flex-row top-0 fixed text-white justify-between w-full py-2 px-4 bg-gradient-to-r from-primary to-[#A084DC] z-10'}>
            <div className={'text-2xl flex gap-2 items-center top-0 cursor-pointer hover:scale-105 duration-200'}
                 onClick={() => {
                     // current('Kitchen');
                     // router.push(`/components`).then(r => console.log(r));
                 }}>
                <HomeIcon sx={{
                    fontSize: '2.4rem',
                }}/>
                <Link to={'/home'}><h1 className={' font-bold'}>{title}</h1></Link>
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
                        <h1>{profile}</h1>
                    </div>
                </div>
            </div>
            <h6 className={`${clicked ? 'visible' : 'hidden'} text-xs hover:scale-105 duration-100 font-semibold absolute top-16 right-3 text-primary cursor-pointer`}
                onClick={() => {
                    // router.push('/components/Login').then(e => console.log(e));
                }}>
                <Link to={'/login'}> Sign out </Link>
            </h6>
        </div>
    )
}

Navbar.defaultProps = {
    current: '/',
    title: 'BDB',
    profile: 'Profile',
}

export default Navbar