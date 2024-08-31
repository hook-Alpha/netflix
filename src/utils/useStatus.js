import { useEffect, useState } from "react";
const useStatus = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    const handleOnline = () => {
      setStatus(true);
    };
    const handleOffline = () => {
      setStatus(false);
    };
    return () => {
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    };
  }, []);
  return status;
};
export default useStatus;
