import { useState, useEffect, useContext } from "react";
import RestaurantCards, { withOpenLabel } from "./RestaurantCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfCards from "../utils/useListOfCards";
import useSearchListOfCards from "../utils/usesearchListOfCards";
import UserContext from "../utils/Context";
const Body = () => {
  const listOfCards = useListOfCards();
  // const searchListOfCards = useSearchListOfCards();
  const [searchListOfCards, setSearchListOfCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardOpen = withOpenLabel(RestaurantCards);

  useEffect(() => {
    fetchData();
  }, []);
  const filterTopData = (listOfCards) => {
    return listOfCards.filter((llistOfCard) => llistOfCard.info.avgRating >= 4);
  };
  const filterSearch = (listOfCards, restaurantInfo) => {
    return listOfCards.filter((llistOfCard) =>
      llistOfCard.info.name.toLowerCase().includes(restaurantInfo.toLowerCase())
    );
  };
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3050123&lng=80.4535121&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // setListOfCards(
    //   json.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants
    // );
    setSearchListOfCards(
      json.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants
    );
  };
  const { user, setUser } = useContext(UserContext);
  if (listOfCards.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="food-body p-[2rem] ">
        <div className="filter-section mb-[2rem] flex flex-col gap-y-[1rem] items-center justify-between md:flex-row">
          <div className="filter-btn">
            <button
              data-testid="topRated"
              className="top-btn bg-blue-500 text-white font-bold p-[.3rem] rounded-md hover:bg-blue-600 "
              onClick={() => {
                const filterTop = filterTopData(listOfCards);
                setSearchListOfCards(filterTop);
              }}
            >
              Top Rated
            </button>
          </div>
          <div className="filter-search flex">
            <input
              data-testid="search-input"
              className="border-2 border-black font-bold italic rounded-l-lg placeholder:pl-[.5rem] placeholder:italic  placeholder:font-bold"
              type="text"
              placeholder="Search goes here...."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              data-testid="search"
              className="search-btn bg-blue-500 text-white font-bold p-[.5rem] rounded-r-lg hover:bg-blue-600"
              onClick={() => {
                const dataSearch = filterSearch(listOfCards, searchText);
                setSearchListOfCards(dataSearch);
              }}
            >
              search
            </button>
          </div>
          {/* <div className="font-bold ">
            UserName:{" "}
            <input
              className="border font-bold p-[.2em] border-black placeholder:p-[1em] placeholder:font-bold placeholder:italic rounded-md italic"
              placeholder="Name"
              type="text"
              value={user.name}
              onChange={(e) => {
                setUser({ name: e.target.value });
              }}
            />
          </div> */}
        </div>
        <div className="container flex flex-wrap justify-around">
          {searchListOfCards.map((card) => {
            return (
             // <Link to={"/restaurant/" + card.info.id} key={card.info.id}>
               // {card.info.avgRating >= 4.5 ? (
                //  <div data-testid="restCard">
                 //   <RestaurantCardOpen restCard={card} />
                 // </div>
               // ) : (
                 // <div data-testid="restCard">
                  //  <RestaurantCards restCard={card?.info} />
                 // </div>
               // )}
             // </Link>
 <Link to={"/restaurant/" + card.info.id} key={card.info.id}>
                
                  <div data-testid="restCard">
                    <RestaurantCards restCard={card?.info} />
                  </div>
               
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
};
export default Body;
