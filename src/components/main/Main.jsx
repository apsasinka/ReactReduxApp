import React, { useEffect } from "react";
import "./main.less";
import Song from "../song/Song";
import { getSong, searchSong } from "../../actions/song";
import { useDispatch, useSelector } from "react-redux";
import SpotifyAuth from "../spotify-auth/SpotifyAuth";

const Main = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.items);
  const originalSongs = useSelector((state) => state.songs.originalItems);
  const isFetching = useSelector((state) => state.songs.isFetching);

  useEffect(() => {
    dispatch(getSong());
  }, []);

  const fetchSong = (id) => {
    dispatch(searchSong(id))
  }

  const handleResetSongs = () => {
    dispatch(getSong());
  };
  
  const areSongsDifferent = JSON.stringify(songs) !== JSON.stringify(originalSongs);

  return (
    <div className="song-container">
      <SpotifyAuth />
      {areSongsDifferent && (
        <button onClick={handleResetSongs}>Вернуться к оригинальным трекам</button>
      )}
      {isFetching && (<div className="fetching"></div>)}
      {!isFetching && songs.map((item) => (
        <Song key={item.track ? item.track.id : item.id} item={item.track ? item.track : item} searchSong={(songId) => fetchSong(songId)} />
      ))}
    </div>
  );
};

export default Main;
