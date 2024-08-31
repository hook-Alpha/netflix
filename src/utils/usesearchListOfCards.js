import { useState, useEffect } from "react";

const useSearchListOfCards = () => {
  const [searchListOfCards, setSearchListOfCards] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN"
    );
    const json = await data.json();
    setSearchListOfCards(
      json.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants
    );
  };
  return searchListOfCards;
};
export default useSearchListOfCards;
