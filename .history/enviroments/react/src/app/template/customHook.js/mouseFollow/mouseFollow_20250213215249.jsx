"use client";
import { useRef } from "react";
import "../../../styles.css";
import Follower from "./follower";

export default function MouseFollow() {
  const mouse = useRef();
  const mouseMoved = () => {
    console.log(mouse);
  };
  return (
    <>
      <div ref={mouse} onMouseMove={mouseMoved} className="fullscreen">
        <Follower />
      </div>
    </>
  );
}
