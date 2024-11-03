import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
    const {id, name, image, category, ingredients, nutrition_info, type, rating, popularity } = coffee
    return (
        <div>
            <Link to={`coffee/${id}`}>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Rating: {rating}</p>
                    <p>Popularity: {popularity}</p>
                    
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Card;