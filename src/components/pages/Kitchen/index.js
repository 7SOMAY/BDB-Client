import Card from "../../cards";

const Kitchen = () => {
    const data = ["Fridge", "Oven", "Motor"];

    // function AddCard() {
    //     // add card function with form
    //     console.log("Add card");
    // }

    return (
        <div className={'py-20 min-[420px]:px-20 min-[420px]:pb-20 flex flex-col items-center justify-center'}>
            <div className={'px-3 flex gap-6 flex-wrap py-8 sm:py-16'}>
                {data.map((i) => (
                    <Card key={i} title={i}/>
                ))}
            </div>
            {/*<Add onClick={AddCard}/>*/}
        </div>
    )
}
export default Kitchen