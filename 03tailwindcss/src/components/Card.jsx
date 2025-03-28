import React from "react";

// function Card(props) {
function Card({userName, btnText = "Visit Me!"}) {

//   console.log("Props:", props);
//   console.log("Username:", props.userName);
  console.log("Username:", userName);

  return (
    <div className="max-w-xs rounded-md shadow-md bg-cyan-300 text-gray-100">
      <img
        src="https://images.pexels.com/photos/31013543/pexels-photo-31013543/free-photo-of-dynamic-bmx-stunt-with-vibrant-purple-smoke.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{userName}</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas doloribus explicabo doloremque iusto. Culpa, unde? Accusantium, veniam. Deserunt, tempore eos. Deserunt ducimus eius totam?
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-black"
        >
          {btnText}
          {/* {btnText || "Visit Me"} */}
        </button>
      </div>
    </div>
  );
}

export default Card;
