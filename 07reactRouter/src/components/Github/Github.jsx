import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/PavanRPawar")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="text-center bg-gray-600 text-white text-3xl p-4 m-5 rounded-4xl flex flex-row justify-evenly">
        <img src={data.avatar_url} alt="Git picture" width={300} className="rounded-full" />
      <div className="flex flex-col justify-center gap-2">
        <p><b>Username:</b> {data.login}</p>
        <p><b>Name:</b> {data.name}</p>
        <p><b>Github followers:</b> {data.followers}</p>
      </div>
    </div>
  );
}

export default Github;

// Use for Loader
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/PavanRPawar')
    return response.json()
}