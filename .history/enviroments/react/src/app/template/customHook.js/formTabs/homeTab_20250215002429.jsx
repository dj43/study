"use client";
import { useRef, useState } from "react";
import "../../../styles.css";
import Follower from "./follower";

export default function HomeTab() {
  const [currentTab, setCurrentTab] = useState("profile");
  const [formData, setFormData] = useState();

  function setTab(event) {
    let tab = event.target.textContent;
    setCurrentTab(tab);
  }

  return (
    <>
      <div onClick={setTab} className="tabsContainer">
        <div id="profile">profile</div>
        <div>settings</div>
        <div>final</div>
      </div>
    </>
  );
}
