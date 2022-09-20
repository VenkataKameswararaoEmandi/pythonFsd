import React from "react";
import { useDispatch } from "react-redux";
import { addCount } from "./redux/todoSlice";

export default function CountNum(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        className="Counter"
        type="text"
        onChange={(a) => dispatch(addCount(a.target.value))}
      />
    </div>
  );
}
