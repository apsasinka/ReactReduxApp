import { setSong } from "../reducers/songReducer";
import { axiosInstance } from "../instance";
import { AppDispatch } from "../reducers/index";

export const getSong = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await axiosInstance.get(
        "/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B"
      );
      console.log("Full Response:", res.data.tracks);
      dispatch(setSong(res.data.tracks));
    } catch (error) {
      console.error("Failed to fetch songs:", error);
    }
  };
};
