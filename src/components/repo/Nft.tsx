import React from "react";
import "./nft.less";

const Nft = (props) => {
  const nft = props.nft;

  return (
    <div className="nft">
      <div className="nft-header">
        <div className="nft-header-name">nft</div>
        <div className="nft-header-stars"></div>
      </div>
      <div className="nft-last-commit"></div>
      <a className="nft-link">Ссылка не репозиторий</a>
    </div>
  );
};

export default Nft;
