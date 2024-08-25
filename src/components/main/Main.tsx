import React, { useEffect } from "react";
import "./main.less";
import Song from "../song/Song";
import { getSong } from "../../actions/song";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";

const Main = () => {
  const dispatch = useAppDispatch();
  const songs = useAppSelector((state) => state.songs.items);

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
