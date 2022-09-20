import React from "react";
import "./styles.css";
import { DashboardIcon } from "../../assets";
import { Section1 } from "./section1";

let menuData = [
  {
    title: "ANALTYTICS",
    option: [
      {
        id: 0,
        label: "Dashboard",
        icon: DashboardIcon,
        notif: 1,
        action: () => {},
      },
    ],
  },
  {
    title: "ANALTYTICS",
    option: [
      {
        id: 1,
        label: "Dashboard",
        icon: DashboardIcon,
        notif: 0,
        action: () => {},
      },
      {
        id: 2,
        label: "Dashboard",
        icon: DashboardIcon,
        notif: 0,
        action: () => {},
      },
    ],
  },
  {
    title: "ANALTYTICS",
    option: [
      {
        id: 3,
        label: "Dashboard",
        icon: DashboardIcon,
        notif: 0,
        action: () => {
          console.log("clicked here");
        },
      },
      {
        id: 4,
        label: "Dashboard",
        icon: DashboardIcon,
        notif: 0,
        action: () => {},
      },
      {
        id: 5,
        label: "Dashboard",
        icon: DashboardIcon,
        notif: 0,
        action: () => {},
      },
    ],
  },
];

export default function SideNav(props) {
  return (
    <div className="sideNav-main-cont">
      {menuData.map((item) => (
        <Section1 data={item} />
      ))}
    </div>
  );
}


