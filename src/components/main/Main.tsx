import React, { useEffect } from "react";
import "./main.less";
import { useDispatch, useSelector } from "react-redux";
import { NFTState } from "../../types";
import Song from "../repo/Song";
import { getSong } from "../../actions/song";

const Main = () => {
  const dispatch = useDispatch();
  const nft = useSelector((state: NFTState) => state.items);

  useEffect(() => {
    dispatch(getSong());
  }, []);

  return (
    <div>
      {/* {nft.map((item) => (
        <Nft key={item.id} item={item} />
      ))} */}
    </div>
  );
};

export default Main;
