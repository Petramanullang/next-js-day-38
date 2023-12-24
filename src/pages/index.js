import React from "react";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return <div>{data?.name}</div>;
};

export default Homepage;
