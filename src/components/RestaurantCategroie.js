import { useState } from "react";
import ItemsList from "./ItemsList";
const RestaurantCategroie = ({ info, isVisible, setVisible }) => {
  const [btn, setBtn] = useState("Show");
  return (
    <div data-testid="categroie">
      <div
        key={info.card.card.title}
        className="bg-gray-100 w-[500px] md:w-[700px] lg:w-[900px] rounded-md"
      >
        <div className="font-bold m-[1rem] p-[1rem] flex justify-between">
          <div>
            {info.card.card.title} ({info.card.card.itemCards.length})
          </div>
          <div>
            {isVisible ? (
              <button
                className="bg-black text-white p-[.2rem] rounded-md"
                onClick={() => {
                  setVisible();
                }}
              >
                Hide
              </button>
            ) : (
              <button
                className="bg-black text-white p-[.2rem] rounded-md"
                onClick={() => {
                  setVisible();
                }}
              >
                Show
              </button>
            )}
          </div>
        </div>
        <div data-testid="itemFetch">
          {isVisible ? <ItemsList items={info.card.card.itemCards} /> : ""}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategroie;
