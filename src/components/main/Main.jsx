import React, { useEffect } from "react";
import "./main.less";
import Song from "../song/Song";
import { getSong, searchSong } from "../../actions/song";
import { useDispatch, useSelector } from "react-redux";
import SpotifyAuth from "../spotify-auth/SpotifyAuth";

const Main = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.items);
  const isFetching = useSelector((state) => state.songs.isFetching);

  useEffect(() => {
    dispatch(getSong());
  }, []);

  const fetchSong = (id) => {
    dispatch(searchSong(id))
  }

  console.log(songs);

  return (
    <div className="song-container">
      <SpotifyAuth />
      {isFetching && (<div className="fetching"></div>)}
      {!isFetching && songs.map((item) => (
        <Song  item={item} searchSong={(songId) => fetchSong(songId)} />
      ))}
    </div>
  );
};

export default Main;
