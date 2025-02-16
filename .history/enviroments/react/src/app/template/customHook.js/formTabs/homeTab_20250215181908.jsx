"use client";
import { useRef, useState } from "react";
import "../../../styles.css";
import Follower from "./settings";
import Profile from "./profile";
import Settings from "./settings";

export default function HomeTab() {
  const [currentTab, setCurrentTab] = useState("profile");
  const [formData, setFormData] = useState({});

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
      {currentTab === "profile" && (
        <Profile formData={formData} setFormData={setFormData} />
      )}
      {currentTab === "settings" && (
        <Settings formData={formData} setFormData={setFormData} />
      )}
    </>
  );
}
