// const Contact = () => {
//   return (
//     <div className="contact flex flex-col items-center h-lvh">
//       <h1 className="text-3xl font-bold text-red-950 mb-[2rem] border-b-4 border-blue-500">
//         ContactUs
//       </h1>
//       <p className="font-bold text-xl">This is 'ContactUs' page 🚀🚀🤯🚀🚀</p>
//     </div>
//   );
// };
// export default Contact;

import { Component } from "react";
import UserContext from "../utils/Context";
class Contact extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div data-testid="contact">
        <h1>Contact</h1>
        <UserContext.Consumer>
          {({ user }) => {
            return (
              <h1>
                {user.name} - {user.email}
              </h1>
            );
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default Contact;
