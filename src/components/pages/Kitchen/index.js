import Card from "../../cards";
import Add from "../../cards/Add";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadAllRooms} from "../../../redux/actions/room";

const Kitchen = () => {

    const dispatch = useDispatch();




    useEffect(() => {
        dispatch(loadAllRooms());
    }, [dispatch]);

    const {rooms} = useSelector((state) => state.room);
    const loading = useSelector((state) => state.room.loading);

    let data = [];
    rooms && rooms.map((i) => (
        i.name === "Kitchen" && data.push(i.appliances)
    ))

    console.log(data);

    const numberOfCards = 3;
    const arr = Array.from({length: numberOfCards});

    function AddCard() {
        // add card function with form
        console.log("Add card");
    }

    return (
        <div className={'py-24 min-[420px]:px-20 min-[420px]:pb-20 flex flex-col items-center justify-center'}>
            {
                loading ?
                    <div className={'px-3 flex gap-6 flex-wrap py-6 sm:py-12'}>
                        {arr.map((i) => (
                            <Card key={i} title={i} isLoading={true}/>
                        ))}
                    </div>
                    :
                    <div className={'px-3 flex gap-6 flex-wrap py-6 sm:py-12'}>
                        {data[0] && data[0].map((i) => (
                            <Card key={i._id} title={i.name}/>
                        ))}
                    </div>
            }
            <Add/>
        </div>
    )
}
export default Kitchen