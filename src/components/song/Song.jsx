import React from "react";
import "./nft.less";

const Song = (props) => {
  const song = props.song;

  return (
    <div className="song">
      <div className="song-header">
        <div className="song-header-name">song</div>
        <div className="song-header-stars"></div>
      </div>
      <div className="song-last-commit"></div>
      <a className="song-link">Ссылка не репозиторий</a>
    </div>
  );
};

export default Song;
