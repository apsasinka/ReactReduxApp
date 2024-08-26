import { SongState } from "./../types";
const SET_SONG = "SET_SONG";

const defaultState = {
  items: [],
  isFetching: true,
};

interface SongAction {
  type: string;
  payload: any[];
}

const songReducer = (
  state: SongState = defaultState,
  action: SongAction
): SongState => {
  switch (action.type) {
    case SET_SONG:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;

export const setSong = (song) => ({ type: SET_SONG, payload: song });
