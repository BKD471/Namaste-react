const FoodItemCard = ({ name, description, price }) => {
  console.log(name);
  return (
    <div className="w-56 p-2 m-2 shadow-lg  bg-pink-50">
      <h2>Name: {name}</h2>
      <h2>Description: {description}</h2>
      <h2>Price: {price}</h2>
    </div>
  );
};

export default FoodItemCard;
