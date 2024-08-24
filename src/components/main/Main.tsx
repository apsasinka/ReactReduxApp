import React, { useEffect } from "react";
import "./main.less";
import { useDispatch, useSelector } from "react-redux";
import { getNft } from "../../actions/repos";
import { NFTState } from "../../types";
import Nft from "../repo/Nft";

const Main = () => {
  const dispatch = useDispatch();
  const nft = useSelector((state: NFTState) => state.items);

  useEffect(() => {
    dispatch(getNft());
  }, []);

  return (
    <div>
      {nft.map((item) => (
        <Nft key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Main;
