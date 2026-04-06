import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="w-[17vw]  h-70 relative bg-white rounded ">
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
        className=" flex justify-between items-center w-full py-4 px-4 absolute bottom-0 text-white"
      >
        <h2 className="text-sm font-semibold capitalize ">{item.title}</h2>
        <button className="bg-indigo-600 text-white rounded px-3 py-1 font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
