"use client";
import { forwardRef } from "react";
import "../../../styles.css";

const Profile = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="circle"></div>
    </>
  );
});
export default Profile;
