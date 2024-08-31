import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error flex flex-col items-center mt-[10rem] ">
      <div className="error-header mb-[1rem] border-b-4 border-blue-500">
        <p className="font-bold text-3xl text-red-600">Error</p>
      </div>
      <div className="error-info text-center">
        <p className="font-bold text-xl">{error.error?.message}</p>
        <p className="font-bold ">
          {error.status} : {error.statusText}
        </p>
      </div>
    </div>
  );
};
export default Error;
