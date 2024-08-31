import { CONST_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemsList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(""));
  };
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div data-testid="item">
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            data-testid="menu"
            className="flex p-[1rem] gap-x-[1rem] border-b border-black  items-center "
          >
            <div className="flex flex-col gap-y-[.2rem] flex-1">
              <div className="flex items-center justify-between">
                <div className="font-bold text-xl">{item.card.info.name}</div>
                <div className="">
                  {item.card.info.itemAttribute.vegClassifier === "VEG"
                    ? "🟢"
                    : "🔴"}
                </div>
              </div>
              <div className="font-bold">₹{item.card.info.price / 100}/-</div>
              <div>{item.card.info.description}</div>
            </div>
            <div className="relative">
              <button
                data-testid="addBtn"
                onClick={() => addFoodItem(item)}
                className="absolute border-t  font-bold text-green-500 bg-white top-[119px] w-[150px] p-[.25rem] text-center rounded-b-lg hover:bg-green-500 hover:text-white hover:transition-all duration-150 ease-out"
              >
                Add+
              </button>
              <img
                className=" w-[150px] h-[150px] flex-[.5] object-cover rounded-md"
                src={CONST_URL + item.card.info.imageId}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemsList;
