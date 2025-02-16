"use client";
import "../../../styles.css";
import Follower from "./follower";

export default function MouseFollow() {
  const mouseMoved = () => {
    console.log("gfgdf");
  };
  return (
    <>
      <div onMouseMove={mouseMoved} className="fullscreen">
        <Follower />
      </div>
    </>
  );
}
