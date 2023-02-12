import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../Constants";
import React, { useState } from "react";

const Body = () => {
  const [searchInput, setSearchInput] = useState("Ehhh BOI!!!!!");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button className="search-btn"></button>
      </div>
      <div className="restaurant-list">
        {RestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
