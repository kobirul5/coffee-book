import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
    const navigate = useNavigate()
    const data = useLoaderData()
    const { category } = useParams()
    const [coffees, setCoffee] = useState([])
    useEffect(() => {
        if (category) {
            const filterByCategory = [...data].filter(coffee => coffee.category === category)
            setCoffee(filterByCategory)
        }
        else {
            setCoffee(data.slice(0, 6))
        }

    }, [data, category])

    return (
        <>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    coffees.map(coffee => <Card
                        key={coffee.id}
                        coffee={coffee}
                    ></Card>)
                }
            </div>
            <div>
                <button className="btn btn-primary mb-10" onClick={()=>navigate('/coffees')} >Coffees</button>
            </div>
        </>
    );
};

export default CoffeeCard;