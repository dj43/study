"use client";
import { useRef, useState } from "react";
import "../../../styles.css";
import Follower from "./follower";

export default function HomeTab() {
  const [currentTab, setCurrentTab] = useState("profile");
  const [formData, setFormData] = useState("profile");

  return (
    <>
      <div className="tabsContainer">
        <div>profile</div>
        <div>settings</div>
        <div>final</div>
      </div>
    </>
  );
}
