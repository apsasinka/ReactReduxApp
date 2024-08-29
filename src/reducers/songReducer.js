const SET_SONG = "SET_SONG";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_SEARCH_SONG = 'SET_SEARCH_SONG';

const defaultState = {
  items: [],
  originalItems: [],
  isFetching: true,
};

const songReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SONG:
      return {
        ...state,
        items: action.payload,
        originalItems: state.originalItems.length ? state.originalItems : action.payload,
        isFetching: false,
      };
      case SET_IS_FETCHING:
        return {
          ...state,
          isFetching: action.payload,
        };
      case SET_SEARCH_SONG:
        return {
          ...state,
          items: action.payload,
          isFetching: false,
        };
    default:
      return state;
  }
};

export default songReducer;

export const setSong = (song) => ({ type: SET_SONG, payload: song });
export const setSearchSong = (song) => ({ type: SET_SEARCH_SONG, payload: song });
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool }); //будет отображать статус запроса
