import React, { useEffect, useState } from "react";
import MakeRequest from "../../utils/apiHandler";
import "./styles.css";

export default function Dashboard(propes) {
  const [data, setData] = useState("");

  async function updateNewData() {
    let res = await MakeRequest("https://catfact.ninja/fact").length();
    console.log(res);
    setData(res.fact);
  }
  useEffect(() => {
    updateNewData();
  }, []);
  return <div>Random Fact : {data}</div>;
}
