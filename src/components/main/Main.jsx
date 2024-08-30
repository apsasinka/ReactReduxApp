import React, { useEffect, useState } from "react";
import "./main.less";
import Song from "../song/Song";
import { getSong, searchSong } from "../../actions/song";
import { useDispatch, useSelector } from "react-redux";
import SpotifyAuth from "../spotify-auth/SpotifyAuth";
import Pagination from "../pagination/Pagination";
import {paginate} from '../../utils/pagination'

const Main = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const songs = useSelector((state) => state.songs.items);
  const originalSongs = useSelector((state) => state.songs.originalItems);
  const isFetching = useSelector((state) => state.songs.isFetching);

  const currentItems = paginate(songs, currentPage, itemsPerPage);

  useEffect(() => {
    dispatch(getSong());
  }, []);

  const fetchSong = (id) => {
    dispatch(searchSong(id));
    setCurrentPage(1);
    window.scrollTo(0, 0);
  }

  const handleResetSongs = () => {
    dispatch(getSong());
    setCurrentPage(1);
  };

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  }
  
  const areSongsDifferent = JSON.stringify(songs) !== JSON.stringify(originalSongs);

  return (
    <>
    <div className="song-container">
      <SpotifyAuth />
      {areSongsDifferent && (
        <button className="song-return" onClick={handleResetSongs}>Вернуться к любимым трекам</button>
      )}
      {isFetching && (<div className="fetching"></div>)}
      {!isFetching && currentItems.map((item) => (
        <Song key={item.track ? item.track.id : item.id} item={item.track ? item.track : item} searchSong={(songId) => fetchSong(songId)} />
      ))}
    </div>
    <Pagination itemsPerPage={itemsPerPage} totalItems={songs.length} paginate={handlePaginate} currentPage={currentPage} />
    </>
  );
};

export default Main;
