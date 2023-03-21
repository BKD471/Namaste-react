import { useState, useEffect } from "react";

export const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = () => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
  };

  const handleOffline = () => {
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};
