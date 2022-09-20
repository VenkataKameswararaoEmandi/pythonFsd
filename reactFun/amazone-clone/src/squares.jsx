import React from "react";
import { useSelector } from "react-redux";
export default function DispSqu(props) {
  const count = useSelector((store) => store.todos);
  return<span>{count.value}</span>;
}
