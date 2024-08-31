import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

import store from "../../utils/store";

describe("Should Load Hole Header Render", () => {
  it("Should load Header Logo render", () => {
    const headerBody = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  });
  it("Should load Header Login Btn", () => {
    const headerBody = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const LoginBtn = headerBody.getByTestId("login-btn");
    expect(LoginBtn).toBeInTheDocument();
  });
  it("Should load Header Online Status render", () => {
    const headerBody = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const status = screen.getByTestId("online");
    expect(status.innerHTML).toBe("✅");
  });
  it("Should load Header Links render", () => {
    render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const Link = screen.getAllByTestId("ul-list");
    expect(Link.length).toBe(4);
  });
  it("Should load Header uI render", () => {
    render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const UI = screen.getByTestId("ui");
    expect(UI).toBeInTheDocument();
  });
  it("Should load Header Cart render", () => {
    const headerBody = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const cart = headerBody.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart ");
  });
  it("Should Change Login Btn to Logout Btn on click", () => {
    render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const LoginFunction = screen.getByTestId("login-btn");
    fireEvent.click(LoginFunction);
    expect(LoginFunction.innerHTML).toBe("Logout");
    fireEvent.click(LoginFunction);
    expect(LoginFunction.innerHTML).toBe("Login");
  });
});
