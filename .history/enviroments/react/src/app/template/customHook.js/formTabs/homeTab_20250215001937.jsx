"use client";
import { useRef, useState } from "react";
import "../../../styles.css";
import Follower from "./follower";

export default function HomeTab() {
  const [currentTab, setCurrentTab] = useState("profile");
  const [formData, setFormData] = useState();

  function setTab(event) {
    console.log(event);
  }

  return (
    <>
      <div onClick={setTab} className="tabsContainer">
        <div>profile</div>
        <div>settings</div>
        <div>final</div>
      </div>
    </>
  );
}
