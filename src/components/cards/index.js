import {useState} from "react";
import Timer from "./Timer";


const Card = ({title, isLoading}) => {
    const [toggle, setToggle] = useState(false);
    const [hover, setHover] = useState(false);

    return (
        <>
            {isLoading ? <>
                <div className={`animate-pulse hover:scale-[1.05] cursor-pointer mx-auto bg-gradient-to-r from-[#A66CFF] to-[#9C9EFE] text-white h-36 w-64 min-[420px]:h-40 min-[420px]:w-60 duration-300 shadow-lg rounded-2xl p-4 flex justify-between`}></div>
            </> : <>
                <div
                    className={`hover:scale-[1.05] cursor-pointer mx-auto bg-gradient-to-r from-[#A66CFF] to-[#9C9EFE] text-white h-36 w-64 min-[420px]:h-40 min-[420px]:w-60 duration-300 shadow-lg rounded-2xl p-4 flex justify-between`}
                    onMouseEnter={() => {
                        setHover(true)
                    }} onMouseLeave={() => {
                    setHover(false)
                }}>
                    {/*Card Content*/}
                    <div
                        className={`${toggle ? 'justify-between bg-transparent text-white' : 'justify-center items-center'} flex flex-col h-full w-2/3 duration-300 p-3 rounded-2xl ${hover ? '' : (toggle ? 'bg-transparent' : 'bg-white text-card')}`}> {/*${hover? '' :(toggle?'bg-transparent':'bg-white text-card')}*/}
                        <h1 className="text-3xl font-extrabold capitalize">{title}</h1>
                        {toggle ? <Timer/> : null}
                    </div>

                    {/*Toggle Button*/}
                    <div className="flex flex-col justify-between">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value={''} className="sr-only peer"/>
                            <div onClick={() => {
                                setToggle(!toggle);
                            }}
                                 className={`w-11 h-6 rounded-full dark:bg-white peer-checked:after:translate-x-full peer-checked:after:duration-300 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-card after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white bg-gray-200 peer-focus:outline-none peer`}></div>
                        </label>
                        <h4 className={'text-lg font-semibold'}> {toggle ? "ON" : "OFF"} </h4>
                    </div>

                </div>
            </>}
        </>
    )
}

Card.defaultProps = {
    title: 'Name'
}

export default Card