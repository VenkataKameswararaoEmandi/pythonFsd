import React from "react";
import "./styles.css";

export function S1Option(props) {
  const { data = { label: "", icon: "", notif: 0, action: () => {}, id: 0 } } =
    props;
  return (
    <div
      className="sideNav-option-container"
      onClick={() => {
        data.action();
      }}
    >
      <img src={data.icon} className="snoco-icon" />
      <p className="snoco-title">{data.label}</p>
      {data.notif > 0 && <span className="snoco-notif">{data.notif}</span>}
    </div>
  );
}
