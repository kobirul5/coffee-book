import { useLoaderData } from "react-router-dom";
import Card from "../compnents/card";

const Coffees = () => {
    const coffees = useLoaderData()
    return (
        <div>
           <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    coffees.map(coffee => <Card
                        key={coffee.id}
                        coffee={coffee}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Coffees;