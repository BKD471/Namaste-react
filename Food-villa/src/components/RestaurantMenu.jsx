import { useParams } from "react-router-dom";
import { CDN_IMG_URL_RESTAURANT } from "../Constants";
import { useRestaurant } from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <>
      {restaurant == null ? (
        ""
      ) : (
        <div className="restaurant-menu">
          <>
            <h1>Retstaurant id: {id}</h1>
            <img
              src={CDN_IMG_URL_RESTAURANT + restaurant?.cloudinaryImageId}
            ></img>
            <h2>{restaurant?.name}</h2>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwoMsg} for two</h3>
          </>
          <>
            <h1>Menu</h1>
            <ul>
              {Object.values(restaurant?.menu.items).map((e) => (
                <li key={e.id}>{e.name}</li>
              ))}
            </ul>
          </>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
