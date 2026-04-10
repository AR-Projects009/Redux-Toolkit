import React from "react";

const ResultCard = ({ item }) => {
  const addToCollection = (item) => {
    const oldData = JSON.parse(localStorage.getItem("collection")) || [];
    const newData = [...oldData, item];

    localStorage.setItem("collection", JSON.stringify(newData));
  };

  return (
    <div className="w-[17vw]  h-70 relative bg-white rounded-xl overflow-hidden ">
      <a className="h-full" href={item.url} target="_blank">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.thumbnail}
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className=" flex justify-between gap-2 items-center w-full  py-4 px-3 absolute bottom-0 text-white"
      >
        <h2 className="text-sm font-semibold  capitalize ">{item.title}</h2>
        <button
          onClick={() => {
            addToCollection(item);
          }}
          className="cursor-pointer bg-indigo-700 text-white active:scale-95  shadow-md hover:-translate-y-1 transition duration-300 rounded px-3 py-1 font-medium"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
