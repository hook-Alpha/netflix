import { useEffect, useState } from "react";
import { CONST_URL } from "../utils/constant";
const RestaurantMenu = (props) => {
  const { restId } = props;
  return (
    <div className="menu-info flex justify-between items-center mb-[1rem]">
      <div className="font-bold">* {Object.values(restId.card.info.name)}</div>
      <img
        className="w-[50px] h-[50px] object-cover ml-[1rem] rounded-full"
        src={CONST_URL + restId.card.info.imageId}
      />
    </div>
  );
};
export default RestaurantMenu;

export const cardsWithVeg = (RestaurantMenu) => {
  return (props) => {
    return (
      <div>
        <RestaurantMenu {...props} />
      </div>
    );
  };
};
