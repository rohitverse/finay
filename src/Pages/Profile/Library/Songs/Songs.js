import React from "react";
import SongCard from "./SongCard/SongCard";

const Songs = () => {
  const songData = [
    {
      username: "@Enimen",
      headCaption: "Lorem placeat ",
      editions: "10",
      value: 10,
    },
    {
      username: "@Enimen",
      headCaption: "Lorem placeat ",
      editions: "10",
      value: 10,
    },
    {
      username: "@Enimen",
      headCaption: "Lorem placeat ",
      editions: "10",
      value: 10,
    },
    {
      username: "@Enimen",
      headCaption: "Lorem placeat ",
      editions: "10",
      value: 10,
    },
    {
      username: "@Enimen",
      headCaption: "Lorem placeat ",
      editions: "10",
      value: 10,
    },
    {
      username: "@Enimen",
      headCaption: "Lorem placeat ",
      editions: "10",
      value: 10,
    },
    {
      username: "@Enimen",
      headCaption: "Lorem placeat ",
      editions: "10",
      value: 10,
    },
  ];
  return (
    <>
      <div className="songs my-3 d-flex  flex-wrap ">
        {songData.map((item, index) => {
          return (
            <SongCard
              key={index}
              username={item.username}
              editions={item.editions}
              headCaption={item.headCaption}
              value={item.value}
            />
          );
        })}
      </div>
    </>
  );
};

export default Songs;
