import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../../mocks/mockTest.json"; //Any name can be given.
import RestaurantCards from "../RestaurantCards";
import { withOpenLabel } from "../RestaurantCards";
it("Should load Restaurant Card(Name) in the Body Container", () => {
  render(<RestaurantCards restCard={MOCK_DATA} />);
  const restaurantCardName = screen.getByText("Bombay Chaat Bhandar");
  expect(restaurantCardName).toBeInTheDocument();
});
it("Should load Restaurant Card(Rating) in the Body Container ", () => {
  render(<RestaurantCards restCard={MOCK_DATA} />);
  const restaurantCardRating = screen.getByText("✯ 4.3");
  expect(restaurantCardRating).toBeInTheDocument();
});
it("Should render Restaurant Card with Recommanded label", () => {
  const RestaurantCardOpen = withOpenLabel(RestaurantCards);
  render(<RestaurantCardOpen restCard={MOCK_DATA} />);
  const restaurantCardLabel = screen.getByText("Recommand");
  expect(restaurantCardLabel).toBeInTheDocument();
});
