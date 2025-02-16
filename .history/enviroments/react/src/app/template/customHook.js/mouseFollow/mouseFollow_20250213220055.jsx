"use client";
import { useRef } from "react";
import "../../../styles.css";
import Follower from "./follower";

export default function MouseFollow() {
  const followerRef = useRef(null);
  const mouseMoved = (event) => {
    console.log(event, followerRef);
  };
  return (
    <>
      <div onMouseMove={mouseMoved} className="fullscreen">
        <Follower ref={followerRef} />
      </div>
    </>
  );
}
