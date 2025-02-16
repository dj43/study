"use client";
import { forwardRef } from "react";
import "../../../styles.css";

const Settings = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="circle"></div>
    </>
  );
});
export default Settings;
