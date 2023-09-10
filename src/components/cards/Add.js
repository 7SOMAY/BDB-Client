import {motion} from "framer-motion";

function AddCard() {
    // add card function with form
    console.log("Add card");
}

const Add = () => {
    return (
        <motion.button
            className={'bg-gradient-to-r from-[#A66CFF] to-[#9C9EFE] text-white h-10 w-10 flex justify-center items-center rounded-full'}
            onClick={AddCard}
            whileHover={{scale: 1.04}}
            whileTap={{scale: 0.96}}
        >
            <span className={'text-2xl font-light mb-[4px]'}>+</span>
        </motion.button>
    )
}

export default Add

