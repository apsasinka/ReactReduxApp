import { setIsFetching, setSearchSong, setSong } from "../reducers/songReducer";
import { axiosInstance } from "../instance";

export const getSongs = () => {
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

export const getTrack = async (id, setTrack) => {
  try {
    const res = await axiosInstance.get(`/v1/tracks/${id}`);
    if (res && res.data) setTrack(res.data);
  } catch (error) {
    console.error("Failed to fetch song:", error);
  }
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