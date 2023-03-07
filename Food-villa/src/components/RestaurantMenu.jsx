
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_URL,CDN_IMG_URL_RESTAURANT  } from "../Constants";




const RestaurantMenu =() =>{
  const {id}=useParams();
  const [restaurant,setRestaurant]=useState(null);

  useEffect(()=>{
     getRestautantDetails();
  },[])


  
const  getRestautantDetails=async ()=>{
  try{
  const data =await fetch(SWIGGY_RESTAURANT_URL+id);
  const jsonData=await data.json();
  setRestaurant(jsonData?.data);
  }catch(error){
    console.log(error)
  }

}

   return(
      <>
       <h1>Retstaurant id: {id}</h1>
       { restaurant==null ? "" :<img src={CDN_IMG_URL_RESTAURANT+restaurant?.cloudinaryImageId }></img>}
       <h2>{ restaurant===null ?"": restaurant?.name }</h2>
      </>
   )
};


export default RestaurantMenu;