import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import Exit from "../assets/exit.svg";
import Cart from "../assets/cart.svg";
import Menu from "../assets/menu.svg";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import UserContext from "../utils/Context";
import { useSelector } from "react-redux";
import cartSlice from "../utils/cartSlice";
const Header = () => {
  const { user } = useContext(UserContext);
  const Status = useStatus();
  const [btn, setBtn] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header flex justify-between items-center p-3 md:p-[1rem]">
      <div className="header-logo">
        <img
          data-testid="logo"
          className="w-14 h-14 rounded-full object-cover"
          src={LOGO_URL}
        />
      </div>
      <nav className="nav-items  bg-blue-500 fixed top-0 right-[-100%] w-[33%] h-lvh p-5 text-right transition-all duration-500 ease-in md:bg-inherit md:static md:w-[auto] md:h-auto ">
        <div className="flex gap-x-[.3rem]">
          <img className="w-8 h-8 rounded-full md:hidden" src={LOGO_URL} />
          <div
            data-testid="online"
            className="status mt-[.4rem] md:hidden text-white"
          >
            {Status ? "✅" : "❌"}
          </div>
          <img
            className="cursor-pointer w-[1.5rem] ml-auto mt-[.4rem] mb-[2rem]  md:hidden object-cover"
            src={Exit}
            onClick={() => {
              document.querySelector("nav").classList.toggle("right-[0]");
            }}
          />
        </div>
        <ul
          data-testid="ui"
          className="m-0 p-0 flex flex-col  gap-x-[2rem] md:flex-row"
        >
          <Link to="/">
            <li
              data-testid="ul-list"
              className="font-bold cursor-pointer text-white md:text-black hover:md:border-b-4 hover:md:border-blue-500"
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              data-testid="ul-list"
              className="font-bold cursor-pointer text-white md:text-black hover:md:border-b-4 hover:md:border-blue-500"
            >
              AboutUs
            </li>
          </Link>
          <Link to="/contact">
            <li
              data-testid="ul-list"
              className="font-bold cursor-pointer text-white md:text-black hover:md:border-b-4 hover:md:border-blue-500"
            >
              ContactUs
            </li>
          </Link>
          <Link to="/instamart">
            <li
              data-testid="ul-list"
              className="font-bold cursor-pointer text-white md:text-black hover:md:border-b-4 hover:md:border-blue-500"
            >
              Instamart
            </li>
          </Link>
        </ul>
      </nav>
      <div className="mobile-nav flex gap-x-[1.5rem]">
        <span className="font-bold flex items-center">{user.name}</span>
        <div className="cart-btn flex cursor-pointer bg-blue-500 p-[.5rem] rounded-md hover:bg-blue-600">
          <p
            className="font-bold text-white"
            data-testid="login-btn"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </p>
        </div>
        <Link to="/cart">
          <div className="cart-btn flex cursor-pointer bg-blue-500 p-[.5rem] rounded-md hover:bg-blue-600">
            <img className="w-[1.2rem]" src={Cart} />
            <p data-testid="cart" className="font-bold text-white">
              Cart {cartItems.length > 0 ? cartItems.length + " items" : ""}
            </p>
          </div>
        </Link>
        <img
          className="w-[1.5rem] cursor-pointer md:hidden "
          src={Menu}
          onClick={() => {
            document.querySelector("nav").classList.toggle("right-[0]");
          }}
        />
      </div>
    </div>
  );
};
export default Header;
