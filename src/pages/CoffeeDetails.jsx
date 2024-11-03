import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CoffeeDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [coffee, setCoffee] = useState({})
    console.log(id)
    useEffect(() => {
        const findCoffee = data.find(coffee => coffee.id === parseInt(id))
        setCoffee(findCoffee)
    }, [data, id])
    const {name, image, category, ingredients, nutrition_info, type, rating, popularity, description, making_process } = coffee
    return (
        <div>
            <div className="card shadow-xl">
            <h2 className="card-title text-4xl font-bold px-10 pt-10">{description}</h2>
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt={name}
                        className="rounded-xl w-full" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Rating: {rating}</p>
                    <p>Popularity: {popularity}</p>
                    <div>
                        <h3 className="text-xl font-semibold">Ingredients</h3>
                        <ul className="ml-10">
                            {
                                ingredients.map(ingredient=> <li>{ingredient}</li>)
                            }
                        </ul>
                    </div>
                    <h2><span className="font-bold text-xl">Making Process:-</span> {making_process}</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;