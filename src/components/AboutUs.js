import { useState, useEffect } from "react";
const About = () => {
  const [user, setUser] = useState({});
  const { avatar_url, name, bio, company, location } = user;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/hook-Alpha");
    const json = await data.json();
    setUser(json);
  };
  return (
    <div className="about flex flex-col items-center h-lvh">
      <div className="about-header border-b-4 border-blue-500 mb-[2rem]">
        <h1 className="font-bold text-3xl text-red-950">About Us</h1>
      </div>

      <div className="about-inf flex flex-col gap-y-[.5rem] border-[3.5px] border-red-950 rounded-md p-[1rem]">
        <div className="user-img">
          <img
            className="w-20 h-20 rounded-full border-[3px] border-blue-500"
            src={avatar_url}
          />
        </div>
        <p className="font-bold text-xl">
          Name : {name} , {bio}
        </p>
        <p className="font-bold text-xl">Location : {location}</p>
        <p className="font-bold text-xl">Email : webdeveloper902@gmail.com</p>
      </div>
    </div>
  );
};
export default About;
