"use client";
import { useRef } from "react";
import "../../../styles.css";
import Follower from "./follower";

export default function HomeTab() {
  const followerRef = useRef(null);
  const mouseMoved = (event) => {
    console.log(event, followerRef);
    followerRef.current.style.top = event.clientY - 25 + "px";
    followerRef.current.style.left = event.clientX - 25 + "px";
  };
  return (
    <>
      <div onMouseMove={mouseMoved} className="fullscreen">
        <Follower ref={followerRef} />
      </div>
    </>
  );
}
