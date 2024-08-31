import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dammy",
    eamil: "dammy@gmail.com",
  },
});
export default UserContext;
