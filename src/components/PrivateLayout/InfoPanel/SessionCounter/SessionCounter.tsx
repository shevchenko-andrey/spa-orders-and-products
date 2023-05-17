import { useEffect, useState } from "react";
import io from "socket.io-client";

const SERVER_URL = "http://localhost:8080";

export const SessionCounter = () => {
  const [sessionCount, setSessionCount] = useState(0);

  useEffect(() => {
    if (typeof window === undefined) {
      return;
    }

    const socket = io(SERVER_URL);

    socket.on("subscribers", handleConnections);

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleConnections = (data: number) => {
    setSessionCount(data);
  };

  return (
    <div>
      <p>Active sessions:</p>
      <span>{sessionCount > 1000000 ? "1000000+" : sessionCount}</span>
    </div>
  );
};
