import React from "react";
import "./index.less";
import { useDispatch } from "react-redux";
import { setCount } from "./reducers/reposReducer";

const App = () => {
  const dispatch = useDispatch();

  const onCountClick = () => {
    dispatch(setCount(5));
  };

  return (
    <div className="app">
      <button onClick={() => onCountClick()}>COUNT</button>
    </div>
  );
};

export default App;
