
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_URL } from "../Constants";




const RestaurantMenu =() =>{
  const {id}=useParams();
  const [restaurant,setRestaurant]=useState(null);

  useEffect(()=>{
    console.log("called")
     getRestautantDetails();
  },[])


  
const  getRestautantDetails=async ()=>{
  try{
    //console.log("tried");
  const data =await fetch(SWIGGY_RESTAURANT_URL+id);
  const jsonData=await data.json();
  setRestaurant(jsonData?.data);
  console.log(jsonData.data.cards[0].card.card.info.name);
  }catch(error){
    console.log(error)
  }

}

   return(
      <>
       <h1>Retstaurant id: {id}</h1>
       <h2>{ restaurant===null ?"": restaurant?.cards[0]?.card?.card?.info?.name }</h2>
      </>
   )
};


export default RestaurantMenu;