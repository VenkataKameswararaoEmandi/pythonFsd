import React from 'react';
import "./App.css";
import Card from "./components/card";
export default function App(){
  return (
    <div className="App">
      <Card pic="./imgapp/blazers.jpg" title="Blazer1" price="1254.00" lable="NEW" />
      <Card pic="./imgapp/blazer1.jpg" title="Blazer2" price="2254.00" lable="SALE -40%" />
      <Card pic="./imgapp/blazer2.webp" title="Blazer3" price="4685.00" lable="SALE -40%" />
      <Card pic="./imgapp/blazer3.jpg" title="Blazer4" price="1598.00" lable="NEW" />
    </div>

  );
  }