
const Card = ({ coffee }) => {
    const { name, image, category, ingredients, nutrition_info, type, rating, popularity } = coffee
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Category: {category}</p>
                    <p>type: {type}</p>
                    <p>Rating: {rating}</p>
                    <p>Popularity: {popularity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;