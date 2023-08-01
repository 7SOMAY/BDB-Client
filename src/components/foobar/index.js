import FooterButtons from "./Buttons";
import BedIcon from '@mui/icons-material/Bed';
import KitchenIcon from '@mui/icons-material/Kitchen';
import TvIcon from '@mui/icons-material/Tv';

const FootBar = ({page, setPage}) => {
    const button = ['DsaBhaggu', 'Kitchen', 'SainiSomay', 'DiningHall', 'AnimeshHarshit'];

    return(
        <div className={`flex gap-2 hover:gap-x-6 min-[420px]:hover:gap-x-12 hover:opacity-90 items-center hover:justify-between duration-500 rounded-full sm:h-auto px-2 py-1 sm:py-2 bg-gradient-to-r from-primary to-[#A084DC] bottom-4 hover:bottom-6 fixed`}>
            <FooterButtons title={button[0]}  icon={<BedIcon/>} status={setPage} page={page}/>
            <FooterButtons title={button[1]}  icon={<KitchenIcon/>} status={setPage} page={page}/>
            <FooterButtons title={button[2]}  icon={<BedIcon/>} status={setPage} page={page}/>
            <FooterButtons title={button[3]}  icon={<TvIcon/>} status={setPage} page={page}/>
            <FooterButtons title={button[4]}  icon={<BedIcon/>} status={setPage} page={page}/>
        </div>
    )
}

export default FootBar