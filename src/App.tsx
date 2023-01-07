import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import "./styles.css";

interface UserData {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
}

export default function App() {
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then(({ data }) => setUserData(data.results[0]));
  }, []);

  return (
    <div>
      {userData && (
        <>
          <img src={userData.picture.medium} alt="profile" />
          <p>{userData.name.first}</p>
          <p>{userData.name.last}</p>
        </>
      )}
    </div>
  );
}
