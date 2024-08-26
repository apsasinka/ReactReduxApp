import React, { useEffect } from "react";
import "./main.less";
import Song from "../song/Song";
import { getSong } from "../../actions/song";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.items);

  useEffect(() => {
    dispatch(getSong());
  }, []);

  return (
    <div>
      {songs.map((item) => (
        <Song key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Main;
