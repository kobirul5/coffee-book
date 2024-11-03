import { useLoaderData } from "react-router-dom";
import Card from "../compnents/card";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData()
    const [coffees, setCoffee] = useState(data)
    const handleSort = (sort) => {
        if(sort=== "popularity"){
           const sorted = [...data].sort((a,b)=> a.popularity - b.popularity)
           setCoffee(sorted)
        }
        else if(sort=== "rating"){
            const sorted = [...data].sort((a,b)=> a.rating - b.rating)
           setCoffee(sorted)
        }
    }
    return (
        <div className="my-10">
            <div className="flex justify-between">
                <h1 className="text-2xl">Sort Coffee's by Popularity and Rating</h1>
                <div className="flex justify-center items-center gap-5">
                    <button onClick={()=> handleSort('popularity')}
                    className="btn bg-warning text-white">Sort By Popularity</button>
                    <button onClick={()=> handleSort('rating')}
                     className="btn bg-warning text-white">Sort By Rating</button>
                </div>
            </div>
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