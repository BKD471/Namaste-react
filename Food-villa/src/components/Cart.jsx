import { useDispatch, useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import { cleartCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const cleartCartHandler = () => {
    dispatch(cleartCart());
  };

  console.log(cartItems);
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Items{cartItems.length}</h1>
      {cartItems.length > 0 && (
        <button
          className="p-2 m-2 bg-red-200"
          onClick={() => cleartCartHandler()}
        >
          Clear Cart{" "}
        </button>
      )}
      <div className="flex">
        {cartItems.map((items) => {
          return <FoodItemCard key={items.card.info.id} {...items.card.info} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
