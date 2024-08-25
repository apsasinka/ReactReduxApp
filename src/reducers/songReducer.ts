const SET_SONG = "SET_SONG";

const defaultState = {
  items: [],
  isFetching: true,
};

export default function songReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_SONG":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

export const setSong = (song) => ({ type: SET_SONG, payload: song });
