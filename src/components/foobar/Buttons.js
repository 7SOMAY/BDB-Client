import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const FooterButtons = ({page, setPage, title, icon}) => {
    const [buttonTitle, setButtonTitle] = useState(false);
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();


    return (
        <div className={`flex flex-col items-center justify-center place-items-center text-center text-primary text-xs`}
             onClick={() => {
                 setPage(title);
                 navigate(`/home/${title}`);
             }}>

            {/*------------------------------Title + Active Dot-------------------------------------------------------------------------------------------------------------------*/}
            <FiberManualRecordIcon className={'top-[49px] sm:top-[65px]'} sx={{
                fontSize: '0.7rem',
                display: `${title === page ? '' : 'none'}`,
                position: 'absolute',
            }}/>
            <div
                className={`absolute bottom-12 sm:bottom-16 duration-100 text-primary font-bold ${buttonTitle && !(title === page) ? `opacity-100 ${hover ? 'animate-bounce' : ''}` : 'opacity-0'} ${title === page ? 'opacity-100' : 'opacity-0'}`}>{title}</div>
            {/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

            <div
                className={`sm:w-12 sm:h-12 p-[3px] ease-in duration-200 h-10 w-10 rounded-full ${title === page ? 'bg-transparent border-[3px] border-white' : 'hover:scale-[1.12]'}`}
                onMouseEnter={() => {
                    setButtonTitle(true);
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setButtonTitle(false);
                    setHover(false);
                }}>
                <div
                    className={`items-center flex justify-center w-full h-full ${title === page ? 'text-white' : 'text-primary'} rounded-full ${title === page ? 'bg-transparent' : 'bg-white'} cursor-pointer`}>{icon}</div>
            </div>

        </div>
    )
}

export default FooterButtons