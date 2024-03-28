import React from "react";
import SongCard from "./SongCard/SongCard";

const Songs = () => {
  const songData = [
    {
      username: "@Enimen",
      headCaption: "Lorem placeat ",
      editions: "10",
      value: 10,
      buybtn: true,
      offerbtn: true,
    },
    {
      username: "@Enimen",
      headCaption: "Venom Forest Prince",
      editions: "10",
      value: 10,
      offerbtn: true,
      fluid: "w-100",
    },
    {
      username: "@Enimen",
      headCaption: "Venom Forest Prince",
      editions: "10",
      value: 10,
      buybtn: true,
      offerbtn: true,
    },
    {
      username: "@Enimen",
      headCaption: "Venom Forest Prince",
      editions: "10",
      value: 10,
      buybtn: true,
      offerbtn: true,
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
              buybtn={item.buybtn}
              offerbtn={item.offerbtn}
              fluid={item.fluid}
            />
          );
        })}
      </div>
    </>
  );
};

export default Songs;
