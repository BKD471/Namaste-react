import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_URL } from "../Constants";

export const useRestaurantMenu = (resId) => {
  const [resturantMenuData, setRestaurantMenuData] = useState(null);

  useEffect(() => {
    getRestautantMenuDetails();
  }, []);

  const getRestautantMenuDetails = async () => {
    try {
      const data = await fetch(SWIGGY_RESTAURANT_URL + resId);
      const jsonData = await data.json();

      setRestaurantMenuData(
        jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card?.itemCards
      );
    } catch (error) {
      console.log(error);
    }
  };

  return resturantMenuData;
};
