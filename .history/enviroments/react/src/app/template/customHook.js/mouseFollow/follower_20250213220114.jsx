"use client";
import { forwardRef } from "react";
import "../../../styles.css";

export default Follower = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="circle"></div>
    </>
  );
});
