import axios from "axios";
import { setNft } from "../reducers/nftReducer";

export const getNft = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.kraken.com/0/public/Nfts?page_size=10`
      );
      console.log(res);

      dispatch(setNft(res.data.result.items));
    } catch (error) {
      console.error("Failed to fetch repositories:", error);
    }
  };
};
