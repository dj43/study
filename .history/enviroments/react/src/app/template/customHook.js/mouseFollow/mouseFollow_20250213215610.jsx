"use client";
import { useRef } from "react";
import "../../../styles.css";
import Follower from "./follower";

export default function MouseFollow() {
  const mouse = useRef();
  const mouseMoved = (event) => {
    console.log(event);
  };
  return (
    <>
      <div ref={mouse} onMouseMove={mouseMoved} className="fullscreen">
        <Follower />
      </div>
    </>
  );
}
