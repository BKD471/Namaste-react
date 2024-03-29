import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_URL } from "../Constants";
import { filterList } from "../utils/helper";
import { useOnline } from "../utils/useOnline";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const Body = ({ user }) => {
  const { user: userFromUserContext, setUser: setUserFromUserContext } =
    useContext(UserContext);

  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
  const [searchInput, setSearchInput] = useState("Ehhh BOI!!!!!");

  //empty dependency array [] => once after render
  //dependency arr =>once after render + every time after re render serachtext changes
  useEffect(() => {
    const fetchedRestaurants = getRestaurant();
  }, []);

  const online = useOnline();
  if (!online) {
    return <h2>Please check your internet connection</h2>;
  }

  async function getRestaurant() {
    const data = await fetch(SWIGGY_URL);
    const jsonData = await data.json();
    setAllRestaurantList(jsonData?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurantList(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurantList) return null;

  return allRestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          data-testid="search-input"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="search-btn"
          onClick={(e) => {
            const data = filterList(searchInput, allRestaurantList);
            setfilteredRestaurantList(data);
          }}
        >
          Search
        </button>
        <input
          value={userFromUserContext.name}
          onChange={(event) => {
            setUserFromUserContext({
              ...userFromUserContext,
              name: event.target.value,
            });
          }}
        ></input>
        <input
          value={userFromUserContext.email}
          onChange={() => {
            setUserFromUserContext({
              ...userFromUserContext,
              email: event.target.value,
            });
          }}
        ></input>
      </div>
      <div className="restaurant-list" data-testid="res-list">
        {filteredRestaurantList.length > 0 ? (
          filteredRestaurantList.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard
                key={restaurant.data.id}
                {...restaurant.data}
                user={user}
              />
            </Link>
          ))
        ) : (
          <h1>No such Restaurant</h1>
        )}
      </div>
    </>
  );
};

export default Body;
