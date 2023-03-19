import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_URL } from "../Constants";

export const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestautantDetails();
  }, []);

  const getRestautantDetails = async () => {
    try {
      const data = await fetch(SWIGGY_RESTAURANT_URL + resId);
      const jsonData = await data.json();
      console.log(jsonData);

      setRestaurant(jsonData?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return restaurant;
};
