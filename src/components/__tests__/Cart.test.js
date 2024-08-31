import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react";
import Header from "../Header";
import Cart from "../Cart";
import RestaurantCardInfo from "../RestaurantCardInfo";
import RESTAURANTDATA_INFO from "../../mocks/restaurantCardInfo.json";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANTDATA_INFO);
    },
  });
});
it("Should load RestaurantCardInfo", async () => {
  await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
          <RestaurantCardInfo />
          <Cart />
        </Provider>
      </StaticRouter>
    )
  );
  const itemScreen = screen.getByText("Jar Cake (2)");
  const itemsBtn = screen.getAllByText("Show");
  fireEvent.click(itemsBtn[3]);
  const menuItems = screen.getAllByTestId("menu");
  const addBtn = screen.getAllByText("Add+");
  fireEvent.click(addBtn[0]);
  const cartInfo = screen.getByTestId("cart");
  expect(cartInfo.innerHTML).toBe("Cart 1 items");
  fireEvent.click(cartInfo);
  const cartItems = screen.getByText("Clear");
  fireEvent.click(cartItems);
  expect(cartInfo.innerHTML).toBe("Cart ");
});
