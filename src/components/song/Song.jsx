import React from "react";
import "./song.less";
import { NavLink } from "react-router-dom";

const Song = (props) => {
  const song = props.item;

  const formatArtists = (artists) => {
    return artists.map(artist => artist.name).join(', ');
  };  

  const handleSearchClick = () => {
    if (song && song.id) {
      props.searchSong(song.id);
    }
  }; 

  return (
    <div className="song">
      <div className="song-header">
        <div>
          <NavLink to={`song/${song.id}`} className="song-header-name">{song.name}</NavLink>
        </div>
        <div className="song-header-popularity">{song.popularity}</div>
      </div>
      <div className="song-artists">
        {formatArtists(song.artists)}
      </div>
      <button className="song-search" onClick={handleSearchClick} >Поиск по треку</button>
      {song.preview_url ? <audio className="song-audio" controls src={song.preview_url}></audio> : <a href={song.href}>Прослушать на площадке</a>}
    </div>
  );
};

export default Song;
