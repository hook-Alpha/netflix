import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store";
import RESTAURANT_DATA from "../../mocks/bodyapifetch.json";
import { act } from "react";
import { values } from "@babel/runtime/regenerator";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});
it("Should load Body", async () => {
  await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    )
  );
});

it("Should load Search Button in the body", async () => {
  await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    )
  );
  const searchBtn = screen.getByTestId("search");
  expect(searchBtn).toBeInTheDocument();
});

it("Should load Search Bar in the body", async () => {
  await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    )
  );
  const searchBar = screen.getByTestId("search-input");
  expect(searchBar).toBeInTheDocument();
});
it("Should load 20 Restaurant Cards in the body", async () => {
  await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    )
  );
  const restaurantLengthItems = screen.getAllByTestId("restCard");
  expect(restaurantLengthItems.length).toBe(20);
});

it("Should load Search Bar  in the body should work", async () => {
  await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    )
  );
  const searchBar = screen.getByTestId("search-input");
  expect(searchBar).toBeInTheDocument();
  const searchBtn = screen.getByTestId("search");
  expect(searchBtn).toBeInTheDocument();
  fireEvent.change(searchBar, { target: { value: "Varalakshmi Tiffins" } });
  fireEvent.click(searchBtn);
  const resaturantCardLength = screen.getAllByTestId("restCard");
  expect(resaturantCardLength.length).toBe(1);
});

it("Should load Filter Top Rated Cards in the body", async () => {
  await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    )
  );
  const topRated = screen.getByTestId("topRated");
  fireEvent.click(topRated);
  const resaturantCardItems = screen.getAllByTestId("restCard");
  expect(resaturantCardItems.length).toBe(20);
});
