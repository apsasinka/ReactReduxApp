import { setIsFetching, setSearchSong, setSong } from "../reducers/songReducer";
import { axiosInstance } from "../instance";

export const getSong = () => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const res = await axiosInstance.get(
        "/v1/me/tracks"
      );
      dispatch(setSong(res.data.items));      
    } catch (error) {
      console.error("Failed to fetch songs:", error);
    }
  };
};

export const searchSong = (idSong) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const res = await axiosInstance.get(
        `/v1/recommendations?seed_tracks=${idSong}`
      );
      dispatch(setSearchSong(res.data.tracks));
    } catch (e) {
      console.error("Failed to search songs: ", e)
    }
  }
}