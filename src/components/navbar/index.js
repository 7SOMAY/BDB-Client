import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useState} from "react";
import ProfileDropdown from "./ProfileDropdown";
import Logo from "../home/Logo";


const Navbar = ({updatePage, title, user}) => {
    const [click, setClick] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);
    const [toggle, setToggle] = useState(false);

    return (
        <div
            className={'flex flex-row top-0 fixed text-white justify-between w-full cursor-pointer py-2 px-4 bg-gradient-to-r from-primary to-[#A084DC] z-10'}>
            <div onClick={() => updatePage('home')}><Logo path={'/home'}/></div>
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
                            setToggle(!toggle);
                        }}>
                        <h1 className={'capitalize'}>{user.user.name}</h1>
                    </div>
                </div>
                <ProfileDropdown clicked={clicked} toggle={toggle} setToggle={setToggle}/>
            </div>

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