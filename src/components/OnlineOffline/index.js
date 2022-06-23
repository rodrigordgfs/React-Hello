import { useEffect, useState } from "react";

export default function OnlineOffline() {
  const [isOnline, setIsOnline] = useState(true);

  function toogleOnline() {
    setIsOnline(true);
  }

  function toogleOffline() {
    setIsOnline(false);
  }

  useEffect(() => {
    window.addEventListener("online", toogleOnline);
    window.addEventListener("offline", toogleOffline);
    return () => {
      window.removeEventListener("online", toogleOnline);
      window.removeEventListener("offline", toogleOffline);
    };
  }, []);

  return (
    <span
      className={`font-semibold uppercase p-2 text-white ${
        isOnline ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {isOnline ? "Online" : "Offline"}
    </span>
  );
}
