import React from "react";
import "./index.less";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "./reducers/reposReducer";
import { RootState } from "./types";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) =>
    state.repos ? state.repos.count : 0
  );

  const onCountClick = () => {
    dispatch(setCount(count + 1));
  };

  return (
    <div className="app">
      <p>{count}</p>
      <button onClick={() => onCountClick()}>COUNT</button>
    </div>
  );
};

export default App;
