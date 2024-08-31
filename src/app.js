import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestaurantCardInfo from "./components/RestaurantCardInfo";
import About from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import { lazy, Suspense } from "react";
import UserContext from "./utils/Context";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
const root = ReactDOM.createRoot(document.getElementById("root"));
const InstaMart = lazy(() => import("./components/InstaMart"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const App = () => {
  const [user, setUser] = useState({
    name: "Satish",
    email: "webdeveloper902@gmail.com",
  });
  return (
    <div className="App">
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appLayoutInfo = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantCardInfo />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appLayoutInfo} />);
