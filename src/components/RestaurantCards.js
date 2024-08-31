import { CONST_URL } from "../utils/constant";
const RestaurantCards = (props) => {
  const { restCard } = props;
  const {
    name,
    avgRating,
    areaName,
    cloudinaryImageId,
    locality,
    cuisines,
    costForTwo,
  } = restCard;
  return (
    <div className="card w-[300px] h-[100%] p-[.5rem] mb-[2rem]">
      <div className="card-img">
        <img
          className="w-[300px] h-[200px] rounded-md"
          src={CONST_URL + cloudinaryImageId}
        />
      </div>
      <div className="card-info flex flex-col gap-y-[1rem]">
        <div className="card-info-top flex flex-col gap-y-[.2rem]">
          <h1 className="font-bold">{name}</h1>
          <h2 className="font-bold">
            [{areaName} , {locality}]
          </h2>
        </div>
        <div className="card-info-bottom flex justify-between">
          {/* <h2 className="font-bold">[{cuisines.join(", ")}]</h2> */}
          <h2 className="font-bold text-green-800">✯ {avgRating}</h2>
        </div>
      </div>
      <h4></h4>
    </div>
  );
};

export const withOpenLabel = (RestaurantCards) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="font-bold text-white absolute  top-0 left-0 p-[.2rem] bg-blue-500 mt-[.5rem] ml-[.5rem] rounded-tl-lg ">
          Recommand
        </label>
        <RestaurantCards {...props} />
      </div>
    );
  };
};
export default RestaurantCards;
