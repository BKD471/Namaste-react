import { useContext } from "react";
import { BsStarFill } from "react-icons/bs";
import { CDN_IMG_URL } from "../Constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
  user: userFomPropsDrilling,
}) => {
  const { user: userFromContext } = useContext(UserContext);
  return (
    <div className="card">
      <img src={CDN_IMG_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      {/* <h4>{cuisines.join(", ")}</h4> */}
      <h4>{area}</h4>
      <span>
        <h4>
          <BsStarFill />
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
      <h1 className="font-bold to-black-800">I am {userFromContext.name}</h1>
      <h1 className="font-bold to-black-800">{userFromContext.email}</h1>
      <h1></h1>
    </div>
  );
};

export default RestaurantCard;
