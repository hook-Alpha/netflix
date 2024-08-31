import { CONST_URL } from "../utils/constant";
const CartInfo = ({ info }) => {
  return (
    <div className="flex flex-col items-center m-[2rem] p-[1rem] w-[500px] h-auto">
      <div className="font-bold ">ID - {info.card.info.id}</div>
      <div>
        <img
          className="w-[500px] h-[300px] object-cover rounded-md"
          src={CONST_URL + info.card.info.imageId}
        />
      </div>
      <div className="flex  flex-col gap-[.2rem]">
        <div className="font-bold p-[.2rem] flex items-center gap-x-[1rem]">
          <h1 className="text-red-950 text-xl">{info.card.info.name}</h1>
          {info.card.info.itemAttribute.vegClassifier === "VEG" ? (
            <h1>🟢 VEG</h1>
          ) : (
            <h1>🔴NONVEG</h1>
          )}
        </div>
        <div
          className="font-bold p-[.2rem] gap-x-[1rem] flex justify-between gap-[1rem
        
        ]"
        >
          <h2>[{info.card.info.category}]</h2>
          <h2 className="text-gray-600">₹ {info.card.info.price / 100} /-</h2>
          <h2 className="text-green-700">
            ✯ {info.card.info.ratings.aggregatedRating.rating}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
