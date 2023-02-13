import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../Constants";
import React, { useState } from "react";

const filterList = (searchInput, searchList) => {
  let finalList = searchList.filter((e) => e.data.name.includes(searchInput));
  return finalList;
};

const Body = () => {
  const [searchInput, setSearchInput] = useState("Ehhh BOI!!!!!");
  const [searchList, setSearchList] = useState(RestaurantList);
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
        <button
          className="search-btn"
          onClick={(e) => {
            const data = filterList(searchInput, RestaurantList);
            console.log(data);
            setSearchList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {searchList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
