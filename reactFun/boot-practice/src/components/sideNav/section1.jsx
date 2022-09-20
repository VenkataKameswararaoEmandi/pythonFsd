import React from "react";
import { S1Option } from "./section1Option";
import "./styles.css";

export function Section1(props) {
  const { data = { title: "", option: [] } } = props;
  return (
    <div>
      <p className="sideNav-s1-title">{data.title}</p>
      <div>
        {data.option.map((item) => (
          <S1Option data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
