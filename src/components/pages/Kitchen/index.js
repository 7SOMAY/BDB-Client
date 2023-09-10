import Card from "../../cards";
import Add from "../../cards/Add";

const Kitchen = () => {
    const data = ["Fridge", "Oven", "Motor"];

    function AddCard() {
        // add card function with form
        console.log("Add card");
    }

    return (
        <div className={'py-24 min-[420px]:px-20 min-[420px]:pb-20 flex flex-col items-center justify-center'}>
            <div className={'px-3 flex gap-6 flex-wrap py-6 sm:py-12'}>
                {data.map((i) => (
                    <Card key={i} title={i}/>
                ))}
            </div>
            <Add/>
        </div>
    )
}
export default Kitchen