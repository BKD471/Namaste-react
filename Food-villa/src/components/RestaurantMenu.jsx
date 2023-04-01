import { useParams } from "react-router-dom";
import { CDN_IMG_URL_RESTAURANT } from "../Constants";
import { useRestaurant } from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useRestaurantMenu } from "../utils/useRestaurantmenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const restaurantMenuData = useRestaurantMenu(id);
  console.log(restaurantMenuData);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item));
  };

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
              className="menu-image"
            ></img>
            <h2>{restaurant?.name}</h2>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwoMsg} for two</h3>
          </>
          <></>

          <div className="p-5">
            <h1>Menu</h1>
            {restaurantMenuData != null && (
              <ul>
                {Object.values(restaurantMenuData).map((e) => (
                  <li key={e.card.info.id}>
                    {e.card.info.name}
                    <button
                      className="p-2 m-2 bg-green-200"
                      onClick={() => handleAddItem(e)}
                    >
                      {" "}
                      Add Item +
                    </button>
                    <button
                      className="p-2 m-2 bg-red-200"
                      onClick={(e) => handleRemoveItem(e)}
                    >
                      Remove -
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
