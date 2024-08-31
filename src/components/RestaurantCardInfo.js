import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CONST_URL } from "../utils/constant";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantCategroie from "./RestaurantCategroie";
const RestaurantCardInfo = () => {
  const [restaurantCard, setRestaurantCard] = useState({});
  const [restMenu, setRestMenu] = useState([]);
  const [filterVeg, setFilterVeg] = useState([]);
  const mapFunction = (cards) => {
    return cards.filter((card) => card.card?.card?.title);
  };
  const [visibleStatus, setVisibleStatus] = useState({
    name: mapFunction(filterVeg),
  });

  // const [showIndex, setShowIndex] = useState();
  const {
    areaName,
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    locality,
    avgRating,
  } = restaurantCard;
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.3066525&lng=80.4365402&restaurantId=" +
        id
    );
    const json = await data.json();
    setRestaurantCard(json.data?.cards[2]?.card.card.info);
    setRestMenu(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setFilterVeg(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (card) =>
          card.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  };

  // const VegFilter = (Vegs) => {
  //   return Vegs.filter(
  //     (Veg) => Veg.card.info.itemAttribute.vegClassifier === "VEG"
  //   );
  // };

  return (
    <div className="restcard flex flex-col items-center  gap-y-[1rem] p-[3rem]    md:gap-x-[1rem]">
      <div className="flex flex-col gap-y-[2rem] gap-x-[10rem] items-center md:flex-row ">
        <div className="restcard-img">
          <img
            className="w-[400px] h-[400px] object-cover rounded-lg"
            src={CONST_URL + cloudinaryImageId}
          />
        </div>
        <div className="restcard-info flex flex-col gap-y-[1rem] ">
          <div className="restcard-info-top">
            <h1 className="font-bold text-xl">
              {name} , [{id}]
            </h1>
            <h2 className="font-bold">
              [{areaName} , {locality}]
            </h2>
          </div>
          <div className="restcard-info-bottom flex justify-between gap-x-[3rem]">
            <h2 className="font-bold">{cuisines + ", "}</h2>
            <h2 className="font-bold">$ {costForTwo / 8000}</h2>
            <h2 className="font-bold text-green-700">✯ {avgRating}</h2>
          </div>
        </div>
      </div>
      <div className="menu-container" data-testid="menu">
        {/* <div className="flex justify-around m-[1rem]">
          <button
            className="text-white bg-green-500 p-[.2rem] font-bold rounded-md"
            onClick={() => {
              const dataFilter = VegFilter(restMenu);
              setRestMenu(dataFilter);
            }}
          >
            VEG
          </button>
        </div> */}
        {/* {filterVeg.map((menu) => {
          return (
            <div>
              <RestaurantMenu restId={menu} />
            </div>
          );
        })} */}
        {filterVeg.map((categorie, index) => (
          <RestaurantCategroie
            info={categorie}
            key={categorie?.card?.card?.title}
            isVisible={visibleStatus.name === categorie?.card?.card?.title}
            setVisible={() => {
              if (visibleStatus.name === categorie?.card?.card?.title) {
                setVisibleStatus(true);
              } else {
                setVisibleStatus({
                  name: categorie?.card?.card?.title,
                });
              }
            }}
            // isVisible={showIndex === index}
            // setVisible={() => {
            //   if (showIndex === index) {
            //     setShowIndex();
            //   } else {
            //     setShowIndex(index);
            //   }
            // }}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantCardInfo;
