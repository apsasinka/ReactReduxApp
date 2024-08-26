import React from "react";
import "./song.less";

const Song = (props) => {
  const song = props.item;

  const formatArtists = (artists) => {
    return artists.map(artist => artist.name).join(', ');
  };  

  const handleSearchClick = () => {
    if (song.track && song.track.id) {
      props.searchSong(song.track.id);
      console.log(song.track.id);
      
    }
  };

  return (
    <div className="song">
      <div className="song-header">
        <div className="song-header-name">{song.track.name}</div>
        <div className="song-header-popularity">{song.track.popularity}</div>
      </div>
      <div className="song-artists">
        {formatArtists(song.track.artists)}
      </div>
      <button className="song-search" onClick={handleSearchClick} >Поиск по треку</button>
      {song.track.preview_url ? <audio className="song-audio" controls src={song.track.preview_url}></audio> : <a href={song.track.href}>Прослушать на площадке</a>}
    </div>
  );
};

export default Song;
