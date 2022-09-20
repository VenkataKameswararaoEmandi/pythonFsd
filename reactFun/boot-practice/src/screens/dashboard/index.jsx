import React, { useState } from "react";
import { SideNav } from "../../components";
import "./styles.css";

export default function Dashboard(props) {
  const [select, setSelect] = useState(0);
  return (
    <div className="dashboard-container">
      <SideNav select={select} onSelect={setSelect} />
    </div>
  );
}