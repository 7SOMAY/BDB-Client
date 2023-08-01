

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useState} from "react";
import {useRouter} from "next/router";


const Navbar = (props) => {
    const router = useRouter();
    const [click, setClick] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);


    return (
        <div
            className={'flex flex-row top-0 fixed text-white justify-between w-full py-2 px-4 bg-gradient-to-r from-primary to-[#A084DC] z-10'}>
            <div className={'text-2xl flex gap-2 items-center top-0 cursor-pointer hover:scale-105 duration-200'}
                 onClick={() => {
                     props.current('Kitchen');
                     router.push(`/components`).then(r => console.log(r));
                 }}>
                <HomeIcon sx={{
                    fontSize: '2.4rem',
                }}/>
                <h1 className={' font-bold'}>{props.title}</h1>
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
                        <h1>{props.profile}</h1>
                    </div>
                </div>
            </div>
            <h6 className={`${clicked ? 'visible' : 'hidden'} text-xs hover:scale-105 duration-100 font-semibold absolute top-16 right-3 text-primary cursor-pointer`}
                onClick={() => {
                    router.push('/components/Login').then(e => console.log(e));
                }}>
                Sign out
            </h6>
        </div>
    )
}

export default Navbar