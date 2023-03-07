import RestaurantCard from "./RestaurantCard";
import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import { SWIGGY_URL } from "../Constants";
import Shimmer from "./Shimmer";

const filterList = (searchInput, searchList) => {
  let finalList = searchList.filter((e) => e?.data?.name?.toLowerCase().includes(searchInput.toLowerCase()));
  return finalList;
};

const Body = () => {
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
  const [searchInput, setSearchInput] = useState("Ehhh BOI!!!!!");

  console.log(allRestaurantList)
  

  //empty dependency array [] => once after render
  //dependency arr =>once after render + every time after re render serachtext changes
  useEffect( ()=>{
    const fetchedRestaurants=getRestaurant();

  },[])

  async function getRestaurant(){
    const data= await fetch(SWIGGY_URL);
     const jsonData= await data.json();
     setAllRestaurantList(jsonData?.data?.cards[2]?.data?.data?.cards);
     setfilteredRestaurantList(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  if(!allRestaurantList) return null;
  // if(allRestaurantList.length>0 && filteredRestaurantList?.length===0) return <h1>No such Restaurant found</h1>

  return (allRestaurantList.length===0)? <Shimmer/>:(
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
            const data = filterList(searchInput, allRestaurantList);
            setfilteredRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurantList.length>0 ?filteredRestaurantList.map((restaurant) => (
       <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
        <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
      </Link>   
        )):<h1>No such Restaurant</h1>
      }
      </div>
    </>
  );
};

export default Body;
