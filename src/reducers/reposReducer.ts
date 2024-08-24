const SET_COUNT = "SET_COUNT"; // вынос типа в отдельную переменную

const defaultState = {
  //дефолтное состояние редюсера
  items: [],
  isFetching: true, //пока, как я поняла, это типа isLoading
  count: 0,
};

export default function reposReducer(state = defaultState, action) {
  switch (
    action.type // свитчем определяем действия actions
  ) {
    case SET_COUNT:
      return { ...state, count: action.payload };
    default:
      return state;
  }
}

export const setCount = (count) => ({ type: SET_COUNT, payload: count }); //action creator
