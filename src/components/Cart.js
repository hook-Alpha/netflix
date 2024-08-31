import { useSelector, useDispatch } from "react-redux";
import cartSlice, { clearCart } from "../utils/cartSlice";
import store from "../utils/store";
import CartInfo from "./CartInfo";
const Cart = () => {
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(clearCart());
  };
  const messageCart = () => {
    if (cartItems.length === 0) {
      return (
        <h1 className="font-bold text-xl ">
          Cart Is <span className="text-red-600 italic">Empty</span> . Add Items
          To The Cart.
        </h1>
      );
    } else {
      return (
        <h1 className="font-bold text-xl ">
          You Add{" "}
          <span className="text-green-600 italic">{cartItems.length}</span>{" "}
          Items To The Cart.
        </h1>
      );
    }
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex flex-col items-center">
      <button
        className="p-[.2rem] m-[1rem] font-bold text-white rounded-md bg-blue-500"
        onClick={() => handleCart()}
      >
        Clear
      </button>
      {messageCart()}
      <div className="flex flex-wrap justify-around">
        {cartItems.map((cartItem) => {
          return (
            <div data-testid="cartInfo">
              <CartInfo key={cartItem.card.info.id} info={cartItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
